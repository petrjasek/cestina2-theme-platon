<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Platon theme.
 */

/**
 * Implements hook_theme().
 */
function platon_theme() {
  return array(
    'platon__header' => array(
      'variables' => array('page' => NULL),
      'template' => 'templates/platon--header',
    ),
    'platon__site_content' => array(
      'variables' => array('page' => NULL),
      'template' => 'templates/platon--site-content',
    ),
    'platon__site_content__first_sidebar' => array(
      'variables' => array('page' => NULL),
      'template' => 'templates/platon--site-content--first-sidebar',
    ),
    'platon__site_content__second_sidebar' => array(
      'variables' => array('page' => NULL),
      'template' => 'templates/platon--site-content--second-sidebar',
    ),
    'platon__footer' => array(
      'variables' => array('page' => NULL),
      'template' => 'templates/platon--footer',
    ),
    'platon__main_navigation__item' => array(
      'variables' => array('item' => NULL),
      'template' => 'templates/platon--main-navigation--item',
    ),
    'platon__main_navigation__row' => array(
      'variables' => array('items' => array()),
      'template' => 'templates/platon--main-navigation--row',
    ),
    'platon__message' => array(
      'variables' => array('type' => 'status', 'heading' => NULL, 'messages' => array()),
      'template' => 'templates/platon--message',
    ),
    'platon__app_list' => array(
      'variables' => array('items' => NULL),
      'template' => 'templates/platon--app-list',
    ),
  );
}

/**
 * Implements hook_theme_registry_alter().
 */
function platon_theme_registry_alter(&$registry) {
  $path = drupal_get_path('theme', 'platon');
  $registry['opigno_tool']['template'] = "$path/templates/opigno--tool";
  $registry['opigno_tools']['template'] = "$path/templates/opigno--tools";
  $registry['opigno_tool']['theme path'] = $registry['opigno_tools']['theme path'] = $path;
}

/**
 * Implements hook_process_html().
 */
function platon_process_html(&$vars) {
  // Hook into color module.
  if (module_exists('color')) {
    _color_html_alter($vars);
  }
}

/**
 * Add a css class to the body based on the taxonomy values applied to a page.
 */
function taxonomy_node_get_terms($node, $key = 'tid') {
    if(arg(0)=='node' && is_numeric(arg(1))) {  
        static $terms;
        if (!isset($terms[$node->vid][$key])) {
            $query = db_select('taxonomy_index', 'r');
            $t_alias = $query->join('taxonomy_term_data', 't', 'r.tid = t.tid');
            $v_alias = $query->join('taxonomy_vocabulary', 'v', 't.vid = v.vid');
            $query->fields( $t_alias );
            $query->condition("r.nid", $node->nid);
            $result = $query->execute();
            $terms[$node->vid][$key] = array();
            foreach ($result as $term) {
                $terms[$node->vid][$key][$term->$key] = $term;
            }
        }
        return $terms[$node->vid][$key];
    }
}

function platon_preprocess_html(&$variables) {
    $node = node_load(arg(1));
    $results = taxonomy_node_get_terms($node);
    if(is_array($results)) {
        foreach ($results as $item) {
           $variables['classes_array'][] = "taxonomy-".strtolower(substr(drupal_clean_css_identifier($item->name, $filter = array('á' => 'e', 'č' => 'c', 'š' => 's','ý' => 'y')), 0, 3)); 
        }
    }
}


/**
 * Implements hook_process_page().
 */
function platon_process_page(&$vars) {
  // Color tries to re-generate the logo. We don't need that.
  $logo = $vars['logo'];

  // Hook into color module.
  if (module_exists('color')) {
    _color_page_alter($vars);
  }

  // Set it back again.
  $vars['logo'] = $logo;

  // Prepare the sub-templates, in correct order.
  $vars['platon__header'] = theme('platon__header', $vars);
  $vars['platon__site_content__first_sidebar'] = theme('platon__site_content__first_sidebar', $vars);
  $vars['platon__site_content__second_sidebar'] = theme('platon__site_content__second_sidebar', $vars);
  $vars['platon__site_content'] = theme('platon__site_content', $vars);
  $vars['platon__footer'] = theme('platon__footer', $vars);
}

/**
 * Implements hook_preprocess_page().
 */
function platon_preprocess_page(&$vars) {
  $path = drupal_get_path('theme', 'platon');
  _platon_inject_css_override();
  drupal_add_library('system', 'jquery.cookie');

  // Prepare the site header attributes.
  $site_header_attributes = array();

  // Change the header image.
  if (theme_get_setting('platon_use_header_background') && theme_get_setting('platon_header_image_path')) {
    if (!isset($site_header_attributes['style'])) {
      $site_header_attributes['style'] = '';
    }
    $site_header_attributes['style'] .= 'background-image: url("' . file_create_url('public://' . theme_get_setting('platon_header_image_path')) . '");';
  }
  elseif (module_exists('color') && $scheme = theme_get_setting('scheme')) {
    // We generate header images, but there not as "clean" as when generated through Photoshop.
    // If one of the provided schemes was chosen, use one of our own header images.
    if (!empty($scheme)) {
      if (!isset($site_header_attributes['style'])) {
        $site_header_attributes['style'] = '';
      }
      $site_header_attributes['style'] .= 'background-image: url("' . base_path() . $path . '/img/' . ($scheme != 'default' ? "$scheme-" : '') . 'header-background.jpg")';
    }
  }

  // Set default value.
  $vars['is_og_node'] = FALSE;

  // Add the search form to the page.
  if (module_exists('search') && user_access('search content')) {
    $vars['search_form'] = drupal_get_form('search_form');
  }

  // Flag if we can show the "register" link.
  $register_setting = variable_get('user_register', USER_REGISTER_ADMINISTRATORS_ONLY);
  $vars['can_register'] = $register_setting != USER_REGISTER_ADMINISTRATORS_ONLY;

  // Render the main navigation.
  $vars['main_navigation'] = _platon_get_main_navigation();

    // Create the OG context tabs.
  if (module_exists('og_context')) {
    $group = og_context('node');
    if (!empty($group['gid'])) {
      $tabs = array();

      foreach (array(
        "node/{$group['gid']}" => array(
          'title' => "",
          'class' => 'platon-og-context-view-tab platon-og-context-home-tab',
        ),
        "node/{$group['gid']}/edit" => array(
          'class' => 'platon-og-context-view-tab platon-og-context-settings-tab',
          'query' => array('destination' => current_path()),
        ),
        "node/{$group['gid']}/group" => array(
          'class' => 'platon-og-context-view-tab platon-og-context-users-tab',
        ),
        "node/{$group['gid']}/tools" => array(
          'class' => 'platon-og-context-view-tab platon-og-context-tools-tab',
        ),
        // Ajout du menu trier les cours - Cédric - 10.09.2014
        "node/{$group['gid']}/sort_courses" => array(
          'class' => 'platon-og-context-view-tab platon-og-context-sort-tab',
        ),
      ) as $path => $override) {
        $link = menu_get_item($path);
        if (!empty($link) && $link['access']) {
          if (!empty($override['title'])) {
            $link['title'] = $override['title'];
          }
          if (!empty($override['class'])) {
            $link['options']['attributes']['class'][] = $link['localized_options']['attributes']['class'][] = $override['class'];
          }
          if (!empty($override['query'])) {
            if (!isset($link['options']['query'])) {
              $link['options']['query'] = array();
            }
            if (!isset($link['localized_options']['query'])) {
              $link['localized_options']['query'] = array();
            }
            $link['localized_options']['query'] += $override['query'];
            $link['options']['query'] += $override['query'];
          }
		  $link['options']['attributes']['title']= $link['localized_options']['attributes']['title']=$link['title'];//Ajout Axel
		  $link['title'] = ''; //Ajout Axel
          $tabs[] = array(
            '#theme' => 'menu_local_task',
            '#link' => $link,
            '#active' => TRUE,
          );
        }
      }
      // Modificaton 10.09.14 - Cédric Carrard
      // 
      // Ajout des tools avec des icons dans le menu en haut à droite
      // 
      // 
      if (og_is_group('node', $vars['node'])) {

        $groups = $vars['node'];

        foreach (opigno_get_node_tools($groups) as $tool) {
      
              $link = menu_get_item($tool['path']);

              if (!empty($link) && $link['access']) {
                  if (!empty($tool['name'])) {
                    $link['title'] = '';//$tool['name']; Ajout Axel
                  }
                  if (!empty($tool['machine_name'])) {
                    $link['options']['attributes']['class'][] = $link['localized_options']['attributes']['class'][] = 'platon-og-context-view-tab platon-og-context-'. $tool['machine_name'] .'-tab';
                  }
                  if (!empty($tool['query'])) {
                    if (!isset($link['options']['query'])) {
                      $link['options']['query'] = array();
                    }
                    if (!isset($link['localized_options']['query'])) {
                      $link['localized_options']['query'] = array();
                    }
                    $link['localized_options']['query'] += $tool['query'];
                    $link['options']['query'] += $tool['query'];
                  }
				  $link['options']['attributes']['title']= $link['localized_options']['attributes']['title']=$tool['name'];//Ajout Axel
                  $tabs[] = array(
                    '#theme' => 'menu_local_task',
                    '#link' => $link,
                    '#active' => TRUE,
                  );       
              }
            } 
      }
      else
      {
        $group = og_context('node'); 

        if (current_path() !== "node/{$group['gid']}") {
        
        $node = node_load($group['gid']);
            foreach (opigno_get_node_tools($node) as $tool) {
                      $link = menu_get_item($tool['path']);
                      if (!empty($link) && opigno_tool_access($tool)) {
                          if (!empty($tool['name'])) {
                            $link['title'] = '';//$tool['name']; Ajout Axel
                          }
                          if (!empty($tool['machine_name'])) {
                            $link['options']['attributes']['class'][] = $link['localized_options']['attributes']['class'][] = 'platon-og-context-view-tab platon-og-context-'. $tool['machine_name'] .'-tab';
                          }
                          if (!empty($tool['query'])) {
                            if (!isset($link['options']['query'])) {
                              $link['options']['query'] = array();
                            }
                            if (!isset($link['localized_options']['query'])) {
                              $link['localized_options']['query'] = array();
                            }
                            $link['localized_options']['query'] += $tool['query'];
                            $link['options']['query'] += $tool['query'];
                          }
						  $link['options']['attributes']['title']= $link['localized_options']['attributes']['title']=$tool['name'];//Ajout Axel
                          $tabs[] = array(
                            '#theme' => 'menu_local_task',
                            '#link' => $link,
                            '#active' => TRUE,
                          ); 					  
                      }
                  }     
              }
        
      }	
      // Modificaton 10.09.14 - Cédric Carrard
      // 
      // On enleve le menu primary sur le page des utilisateur
      //
      if (!empty($tabs)) {
        if (isset($vars['node'])&&!platon_display_tabs($vars['node']))
        {
          unset($vars['tabs']['#primary']);
        }
        $vars['og_context_navigation'] = render($tabs);
      }
      if (isset($vars['node']) && $vars['node']->nid == $group['gid']) {
        // $vars['hide_tabs'] = TRUE;
        $vars['is_og_node'] = TRUE;
      }
    }
  } 	


  // Show the number of unread messages.
  if (function_exists('privatemsg_unread_count')) {
    global $user;
    $unread = privatemsg_unread_count($user);
    drupal_add_js(array('platon' => array('unreadMessages' => $unread)), 'setting');
  }

  // Use a custom markup for the front page if anonymous ?
  if (empty($vars['user']->uid) && $vars['is_front'] && theme_get_setting('platon_use_home_page_markup')) {
    $setting = theme_get_setting('platon_home_page_markup');

    if (!empty($setting['value'])) {
      $value = check_markup($setting['value'], $setting['format']);
      if (!empty($value)) {
        drupal_set_title($vars['site_name']);
        $vars['page']['content'] = $value;
      }
    }
  }

  // Render the site header attributes.
  $vars['site_header_attributes'] = drupal_attributes($site_header_attributes);
  if (variable_get('platon_group_style', 1) == 1) {
    if (isset($vars['group_state'])) {
      $vars['group_state'] = platon_render_group_state($vars['group_state']);
    }
  }
}

function platon_render_group_state($var) {
  $empty = TRUE;
  $html = '<div id="opigno-group-progress">';
  foreach ($var['course'] as $index => $tool) {
    $html .= '<div class="opigno-group-progress-course">';
    $course = node_load($index);
    $html .= l(check_plain($course->title), 'node/' . $course->nid);
    if (isset($tool['quiz'])) {
      $empty = FALSE;
      $html .= '<div class="opigno-group-progress-course-quiz">';
      $html .= $tool['quiz'];
      $html .= '</div>';
    }
    if (isset($tool['in-house-training'])) {
      $empty = FALSE;
      $html .= '<div class="opigno-group-progress-course-in-house-training">';
      $html .= $tool['in-house-training'];
      $html .= '</div>';
    }
    if (isset($tool['webex'])) {
      $empty = FALSE;
      $html .= '<div class="opigno-group-progress-course-webex">';
      $html .= $tool['webex'];
      $html .= '</div>';
    }
    $html .= '</div>';
  }
  $html .= '</div>';
  return $html;
}

/**
 * Implements hook_preprocess_node().
 */
function platon_preprocess_node(&$vars) {
  $vars['base_path'] = base_path();

  if (defined('OPIGNO_COURSE_BUNDLE') && !empty($vars['node']->type) && in_array($vars['node']->type, array(OPIGNO_COURSE_BUNDLE, 'class'))) {
    $vars['content']['fields'] = array(
      '#weight' => -100,
      '#prefix' => '<div class="node-course-other-fields node-course-more-info">',
      '#suffix' => '</div>',
    );
    $i = 0;
    foreach ($vars['content'] as $key => $item) {
      if (!in_array($key, array('body', 'opigno_course_tools')) && !empty($item['#theme']) && $item['#theme'] === 'field') {
        $vars['content']['fields'][$i][$key] = $item;
        $i++;
        unset($vars['content'][$key]);
      }
    }

    // HACKY - add CSS classes based on roles :-S
    // This is absolutely horrible, but there's just too much pressure
    // to get this out the door quickly :-(. It pains me.
    $roles = og_get_user_roles('node', $vars['node']->nid);
    foreach ($roles as $role) {
      $vars['classes_array'][] = str_replace(' ', '-', $role);
    }

    if (user_access('administer nodes')) {
      $vars['classes_array'][] = 'is-admin';
    }
  }

  if (module_exists('quiz') && $vars['node']->type == 'quiz') {
    global $user;
    $vars['passed_quiz'] = _platon_check_user_passed_quiz($vars['node'], $user);
  }
}

/**
 * Implements template_preprocess_field().
 */
function platon_preprocess_field(&$vars, $hook) {
  if (!empty($vars['element']['#field_name'])) {
    switch ($vars['element']['#field_name']) {
      case 'course_quota':
        if ($vars['items'][0]['#markup'] == '-1') {
          $vars['items'][0]['#markup'] = t("No limit");
        }
        break;

      case 'group_access':
        // Please forgive me :,-(
        $vars['items'][0]['#markup'] = t($vars['items'][0]['#markup']);
        break;
    }
  }

  if (!empty($vars['element']['#field_type'])) {
    if ($vars['element']['#field_type'] == 'list_boolean') {
      if (isset($vars['items'][0]['#markup']) && ($vars['items'][0]['#markup'] == '0')) {
        $vars['items'][0]['#markup'] = t("No");
      }
      elseif (isset($vars['items'][0]['#markup']) && ($vars['items'][0]['#markup'] == '1')) {
        $vars['items'][0]['#markup'] = t("Yes");
      }
    }
  }
}

/**
 * Implements theme_status_messages().
 * Use our own template, which contains a dismiss link. Users can dismiss the message if they want.
 */
function platon_status_messages($vars) {
  $display = $vars['display'];
  $output = '';
  $status_heading = array(
    'status' => t('Status message'),
    'error' => t('Error message'),
    'warning' => t('Warning message'),
  );
  foreach (drupal_get_messages($display) as $type => $messages) {
    $output .= theme('platon__message', array('type' => $type, 'heading' => !empty($status_heading[$type]) ? $status_heading[$type] : NULL, 'messages' => $messages));
  }
  return $output;
}

/**
 * Implements hook_form_FORM_ID_alter() for quiz_question_answering_form().
 * Group actions together for easier theming.
 */
function platon_form_quiz_question_answering_form_alter(&$form, $form_state) {
  $form['navigation']['#prefix'] = '<div class="quiz-question-navigation-wrapper">';
  $form['navigation']['#suffix'] = '</div>';
}

/**
 * Implements theme_apps_list().
 */
function platon_apps_list($vars) {
  $items = array();
  foreach($vars['apps'] as $id=> $app) {
    if (!preg_match("/^#/", $id)) {
      $items[] = drupal_render($app);
    }
  }
  return theme('platon__app_list', array('items' => $items));
}

/**
 * Helper function to create the main navigation.
 * Returns the rendered main navigation.
 * @see platon_theme().
 *
 * @return string
 */
function _platon_get_main_navigation() {
  $html = '';
  $items = _platon_get_main_navigation_items();
  $items_per_col = 2;

  // Separate the items in 2 columns.
  for ($i = 0, $rows = ceil(count($items) / $items_per_col); $i < $rows; $i++) {
    $j = $items_per_col;
    $row_html = '';
    // Render the items first.
    while ($j && ($item = array_shift($items))) {
      if (!empty($item['#href'])) {
        $row_html .= theme('platon__main_navigation__item', array('item' => $item));
        $j--;
      }
    }
    // If any items were rendered, wrap them in a row.
    if (!empty($row_html)) {
      $html .= theme('platon__main_navigation__row', array('items' => $row_html));
    }
  }

  return $html;
}

/**
 * Helper function to list the available items for the main navigation.
 *
 * @return array
 */
function _platon_get_main_navigation_items() {
  $source = @theme_get_setting('platon_menu_source');
  if (!empty($source)) {
    return menu_tree($source);
  }
  else {
    static $items = array();

    if (empty($items)) {
      $items = array(
        'home' => array(
          '#href' => '<front>',
          '#title' => t("Home"),
          'weight' => -50,
        ),
      );

      if (module_exists('opigno')) {
        $item = menu_get_item('my-courses');
        if ($item['access']) {
          $items['my-courses'] = array(
            '#href' => 'my-courses',
            '#title' => t("My courses"),
            'weight' => -40,
          );
        }

        $item = menu_get_item('course-catalogue');
        if ($item['access']) {
          $items['training-catalogue'] = array(
            '#href' => 'course-catalogue',
            '#title' => t("Training catalogue"),
            'weight' => -30,
          );
        }

        $item = menu_get_item('admin/opigno');
        if ($item['access']) {
          $items['administration'] = array(
            '#href' => 'admin/opigno',
            '#title' => t("Administration"),
            'weight' => 10,
          );
        }
      }

      if (module_exists('forum')) {
        $item = menu_get_item('forum');
        if ($item['access']) {
          $items['forum'] = array(
            '#href' => 'forum',
            '#title' => t("Forum"),
            'weight' => -20,
          );
        }
      }

      if (module_exists('opigno_calendar_app')) {
        $item = menu_get_item('opigno-calendar');
        if ($item['access']) {
          $items['calendar'] = array(
            '#href' => 'opigno-calendar',
            '#title' => t("Calendar"),
            'weight' => -15,
          );
        }
      }

      if (module_exists('opigno_quiz_app')) {
        $item = menu_get_item('my-achievements');
        if ($item['access']) {
          $items['my-achievements'] = array(
            '#href' => 'my-achievements',
            '#title' => t("My achievements"),
            'weight' => -10,
          );
        }
      }

      if (module_exists('opigno_messaging_app')) {
        $item = menu_get_item('messages');
        if ($item['access']) {
          $items['messages'] = array(
            '#href' => 'messages',
            '#title' => t("Messages"),
            'weight' => 0,
          );
        }
      }

      // Keep the keys.
      foreach ($items as $key => $item) {
        $items[$key]['#localized_options']['attributes']['id'] = 'main-navigation-item-' . $key;
      }

      usort($items, 'drupal_sort_weight');
    }

    return $items;
  }
}

/**
 * Helper function to get the group title.
 *
 * @param  int $nid
 *
 * @return string
 */
function platon_get_group_title($nid)
{
  $query = db_select('node', 'n');
  $query->leftJoin('node_revision', 'v', 'n.vid = v.vid');
  return $query->fields('v', array('title'))
            ->condition('n.nid', $nid)
            ->execute()
            ->fetchField();
}

/**
 * Helper function to load the CSS override file.
 *
 * @return object|false
 */
function _platon_get_css_override_file() {
  $fid = theme_get_setting('platon_css_override_fid');
  if (!empty($fid))
  {
    $file = file_load($fid);
    if (!empty($file) && is_readable($file->uri)) {
      return $file;
    }
  }
  return FALSE;
}

/**
 * Helper function to write the CSS override file.
 *
 * If a file already existed, the old one is set to a temporary file so Drupal cleans it up. Returns the new file fid.
 *
 * @param string $content
 *
 * @return int
 */
function _platon_store_css_override_file($content)
{
  global $user;

  // If a file already existed, set it to a temporary file so
  // Drupal cleans it up.
  if ($file = _platon_get_css_override_file()) {
    $file->status = 0;
    file_save($file);
  }

  if (empty($content)) {
    return 0;
  }

  // Create a new file.
  $filename = uniqid(md5($content)) . '_platon_override.css';
  $uri = "public://$filename";
  $f = fopen($uri, 'w');

  // If the write succeeds, store it as a managed file.
  if (fwrite($f, $content)) {
    fclose($f);

    $file = (object) array(
      'uri' => $uri,
      'filename' => $filename,
      'status' => FILE_STATUS_PERMANENT,
      'uid' => $user->uid,
    );
    file_save($file);

    // Return the file id.
    return $file->fid;
  }
  else {
    // The write didn't succeed. Return 0.
    return 0;
  }
}

/**
 * Helper function to load the content of the theme override CSS file.
 *
 * If no file exists, will just return an empty string.
 *
 * @return string
 */
function _platon_get_css_override_file_content() {
  if ($file = _platon_get_css_override_file()) {
    return file_get_contents($file->uri);
  }
  else {
    return '';
  }
}

/**
 * Helper function to inject the override CSS into the current page, if it exists.
 */
function _platon_inject_css_override() {
  if ($file = _platon_get_css_override_file()) {
    drupal_add_css($file->uri, array('group' => CSS_THEME));
  }
}

/**
 * Remove white from the image and replace it with transparency.
 *
 * @param  string $filepath
 */
function _platon_color_remove_white($filepath) {
  if (preg_match('/\.png$/i', $filepath)) {
    $image = imagecreatefrompng($filepath);
    $white = imagecolorallocate($image, 255, 255, 255);
    imagecolortransparent($image, $white);
    if (!imagepng($image, $filepath)) {
      drupal_set_message(t("Could not rewrite %file. Perhaps its a permission issue. Your theme might not look exactly as you intended.", array('%file' => $filepath)), 'warning');
    };
  }
}

/**
 * Check if user passed the Quiz.
 * This is bad practice, but Quiz does not provide a simple way to check
 * if a user passed or not.
 *
 * @param $node
 * @param $user
 *
 * @return bool
 */
function _platon_check_user_passed_quiz($node, $user)
{
  $res = db_query('
      SELECT qnp.nid, qnp.pass_rate, qnrs.score
      FROM {quiz_node_properties} qnp
      INNER JOIN {quiz_node_results} qnrs ON qnrs.vid = qnp.vid
      WHERE qnrs.uid = :uid AND qnrs.nid = :nid AND qnrs.is_evaluated = 1
      ORDER BY qnrs.result_id DESC',
    array(':uid' => $user->uid, ':nid' => $node->nid)
  );
  // Check if one of the results is "passed".
  while ($line = $res->fetchAssoc()) {
    if ($line['score'] >= $line['pass_rate']) {
      return TRUE;
    }
  }
  return FALSE;
}

/**
 * Checks if the tabs should be rendered
 */
function platon_display_tabs($node)
{
  if (module_exists("quiz"))
  {
    $types = array_keys(_quiz_question_get_implementations());
    if (in_array($node->type,$types))
    {
      return true;
    }
  }
  return false;
}

/**
 * Display a single views grouping.
 */
function platon_views_view_grouping($vars) {
  $view = $vars['view'];
  $title = $vars['title'];
  $content = $vars['content'];

  $output = theme('ctools_collapsible', array('handle' => $title, 'content' => $content, 'collapsed' => TRUE));

  return $output;
}


function cestina_lekce($tema) {
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
        ->entityCondition('bundle', 'lekce')
        ->fieldCondition('field_temataref', 'target_id', $tema->nid)
        ->propertyCondition('status', NODE_PUBLISHED)
        ;

    $lekce = [];
    $roviny = array("14", "17", "15", "16");
    $result = $query->execute();
    if (isset($result['node'])) {
        $items = entity_load('node', array_keys($result['node']));
        foreach ($roviny as $rovina) {
          foreach (array_keys($items) as $id) {
            if ($rovina === $items[$id]->field_jazykroviny['und'][0]['tid']) {
              $lekce[] = $items[$id];
            }
          }
        }
    }

    return $lekce;
}

function cestina_tema_pro_lekci($lekce) {
    return node_load($lekce->field_temataref[LANGUAGE_NONE][0]['target_id']);
}

function weight_sort($a, $b) {
  $a_weight = intval($a->weight_weight);
  $b_weight = intval($b->weight_weight);

  if ($a_weight == $b_weight) {
    return 0;
  }

  // inverted logic to match editors logic
  return $a_weight < $b_weight ? 1 : -1;
}

function cestina_cviceni($lekce) {
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
        ->entityCondition('bundle', 'cviceni')
        ->fieldCondition('field_lekceref', 'target_id', $lekce->nid)
        ->propertyCondition('status', NODE_PUBLISHED)
        ;
  
    try {
        $result = $query->execute();
        if (isset($result['node'])) {
            $items = entity_load('node', array_keys($result['node']));
            uasort($items, weight_sort);
            return $items;
        }
    } catch (Exception $e) {
        var_dump($e);
    }
}

function cestina_lekce_pro_cviceni($cviceni) {
    return node_load($cviceni->field_lekceref[LANGUAGE_NONE][0]['target_id']);
}

function cestina_ukoly($cviceni) {
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
        ->entityCondition('bundle', 'h5p_content')
        ->fieldCondition('field_cviceni', 'target_id', $cviceni->nid)
        ->propertyCondition('status', NODE_PUBLISHED)
        ;

    try {
        $result = $query->execute();
        if (isset($result['node'])) {
            $items = entity_load('node', array_keys($result['node']));
            uasort($items, weight_sort);
            return $items;
        }
    } catch (Exception $e) {
        var_dump($e);
    }
}

function cestina_cviceni_pro_ukol($ukol) {
    return node_load($ukol->field_cviceni[LANGUAGE_NONE][0]['target_id']);
}

function cestina_path($tema) {
    $path = [];
    foreach(cestina_lekce($tema) as $l) {
        $path[] = $l;
        foreach(cestina_cviceni($l) as $c) {
            $path[] = $c;
        }
    }

    return $path;
}

function cestina_ukoly_vse($tema) {
    $ukoly = [];
    foreach (cestina_lekce($tema) as $l) {
        foreach (cestina_cviceni($l) as $c) {
            foreach (cestina_ukoly($c) as $ukol) {
                $ukoly[] = $ukol->nid;
            }
        }
    }

    return $ukoly;
}

const CESTA_DIST = '/elementsApp/';
const UKOLY_USER_KEY = 'cestina_ukoly';

function cesta_dist($pattern, $directory) {
    foreach(glob(dirname(__file__) . CESTA_DIST. $pattern) as $file) {
        return base_path() . $directory . CESTA_DIST . basename($file);
    }
}

function cesta_asset($path, $directory) {
    return base_path() . $directory . CESTA_DIST . '/assets/' . $path;
}

function cesta_asset_scene($scene, $file, $directory) {
    $path = '/scene/' . $scene . '/' . $file;
    return cesta_asset($path, $directory);
}

function get_scene($tema) {
    if (isset($tema->field_scena) && !empty($tema->field_scena)) {
        return $tema->field_scena['und'][0]['value'];
    }

    return 'pastva';
}

function cesta_asset_scene_player($tema, $directory) {
    $scene = get_scene($tema);
    return cesta_asset_scene($scene, 'player.png', $directory);
}

function cesta_asset_scene_bg($tema, $directory) {
    $scene = get_scene($tema);
    return cesta_asset_scene($scene, $scene . '-bg.jpg', $directory);
}

function print_json($data) {
    print(json_encode($data, JSON_PRETTY_PRINT));
}

function cesta_metapath_config($tema, $lekce, $dir) {
    global $user;

    $startindex = 0;
    $pathpoints = array();
    $ukoly_done = isset($user->data[UKOLY_USER_KEY]) ? json_decode($user->data[UKOLY_USER_KEY], true) : array();

    $lekce = null;
    $unfinished = false;
    foreach(cestina_path($tema) as $p) {
        $url = null;
        $done = false;

        if ($p->type === 'cviceni') { // pro cviceni vyber prvni nehotovy ukol
            $ukoly = cestina_ukoly($p);
            foreach ($ukoly as $ukol) {
                if (isset($ukoly_done[$ukol->nid])) {
                    continue;
                }

                $url = url('node/' . $ukol->nid);
                break;
            }

            if ($url === null) { // vsechny ukoly hotove
              $url = url('node/' . $ukoly[0]->nid);
              $done = true;
              if (!$unfinished) {
                $startindex++;
              }
            } else { // nedokoncena lekce, dal uz se startindex neposune
              $unfinished = true;
            }
        } else { // zacatek lekce
            if ($lekce) { // pokud uz nejaka skoncila
              // todo: test predchozi lekce
              // $url = url('node/' . $p->nid);
            } else { // prvni lekce, prvni bod
              // noop
            }

            $lekce = $p;
        }

        if ($url === null) { // preskoci prvni bod
          continue;
        }

        $pathpoints[] = array(
            'type' => $p->type === 'lekce' ? 'test' : 'default',
            'url' => $url,
            'done' => $done,
        );
    }

    // pridej nakonec test pro posledni lekci
    if ($lekce) {
        $pathpoints[] = array(
            'type' => 'test',
            'done' => false,
            'url' => url('node/' . $lekce->nid),
        );
    }

    return array(
        'pathId' => 'seznamovani',
        'startindex' => $startindex,

        'backgroundImageUrl' => cesta_asset_scene_bg($tema, $dir),
        'playerAnimationUrl' => cesta_asset_scene_player($tema, $dir),

        'path' => array(
            'color' => '#d8bcb0',
            'outline' => '#89756e',
            'pinNext' => '#d8d16b',
            'pinPrev' => '#7a8868',
            'pinCurrent' => '#d88e55',
        ),

        'layers' => array(
        ),

        'pathpoints' => $pathpoints,
    );
}

function cestina_nastav_ukol_done($nid) {
    global $user;

    if (isset($user->data[UKOLY_USER_KEY])) {
      $ukoly = json_decode($user->data[UKOLY_USER_KEY], true);
    } else {
      $ukoly = array();
    }

    if (!isset($ukoly[$nid])) {
      $ukoly[$nid] = true;
      $user->data[UKOLY_USER_KEY] = json_encode($ukoly);
      user_save($user);
    }
}
