<header id="site-header"<?php print $site_header_attributes; ?>>
  <div class="row">
    <div class="col col-1-out-of-2 col-1-out-of-4 col-1-out-of-6">
      <?php if (!empty($logo)): ?>
        <a href="<?php print $front_page; ?>" id="logo"><img src="<?php print $logo; ?>" alt="Čeština jako druhý jazyk"></a> 
      <?php endif; ?>
    </div>

    <div class="col col-1-out-of-2 col-3-out-of-4 col-5-out-of-6">
      <div class="logo-text">e-learning pro žáky s odlišným mateřským jazykem provozovaný společností META, o.p.s.</div>
      <div class="flags">
        <a href="http://www.cestina2.cz" class="flag-cz">cz</a>
        <a href="http://www.cestina2.cz/welcome-in-e-learningu-czech-as-a-second-language" class="flag-en">en</a>
        <a href="http://www.cestina2.cz/dobro-pozhalovat-v-elektronnoe-obuchenie-cheshskiy-kak-vtoroy-yazyk" class="flag-ru">ru</a>
        <a href="http://www.cestina2.cz/chao-ban-tai-e-learning-tieng-sec-nhu-ngon-ngu-thu-2" class="flag-vie">vie</a>
      </div>
      <?php if (!empty($search_form)): ?>
        <a href="<?php print url('search/node'); ?>" class="mobile-link-icon">
          <img src="<?php print $base_path . $directory; ?>/img/search-submit.png">
        </a>

        <a href="#top" id="menu-toggle-link" class="mobile-link-icon">
          <img src="<?php print $base_path . $directory; ?>/img/menu-toggle-icon.png">
        </a>

        <?php if ($logged_in): ?>
          <a href="<?php print url('user/logout'); ?>" class="mobile-link-icon">
            <img src="<?php print $base_path . $directory; ?>/img/logout-icon.png">
          </a>
        <?php endif; ?>

        <div id="header-search">
          <?php print render($search_form); ?>
        </div>
      <?php endif; ?>

      <div id="user-account-information">
        <div id="user-account-information-picture">
          <a href="<?php print url('user'); ?>">
            <img src="<?php print $base_path . $directory; ?>/img/anonymous-account.png">
          </a>
        </div>

        <div id="user-account-information-name">
          <?php if ($logged_in): ?>
          <?php print t("vaše jméno: @user", array('@user' => $logged_in ? $user->name : t("guest"))); ?>
          <a href="<?php print url('user/logout'); ?>" class="logout-button">odhlásit</a>
          <?php endif; ?>

          <div id="user-account-information-links">
            <?php print render($page['header']); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
