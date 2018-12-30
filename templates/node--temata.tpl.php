<?php
$lekce = cestina_lekce($node);
$config = cesta_metapath_config($node, $lekce, $directory);
?>

<div class='<?php print $classes ?> clearfix' <?php print ($attributes) ?>>

  <meta-path config="metapathConfig" startindex="<?php print $config['startindex']; ?>" redirect="true"></meta-path>

  <?php if (!empty($content)): ?>
    <div class='clearfix <?php if (!empty($is_prose)) print 'prose' ?>'>
      <?php hide($content['links']); ?>
      <?php hide($content['comments']); ?>
      
      <div class="icon-title"><?php print $title; ?></div><?php print render($content['field_ikona']) ?>
      
      <div class="field field-name-field-lekceref field-type-entityreference field-label-hidden">  
        <a href="/">zpět</a>
      </div>
      
      <?php print render($content['links']); ?>
      <?php print render($content['comments']); ?>
    </div>
  <?php endif; ?>

</div>

<script>
var metapathConfig = <?php print json_encode($config, JSON_PRETTY_PRINT); ?>;
</script>

<script type="text/javascript" src="<?php print cesta_dist('runtime.*.js', $directory); ?>"></script>
<script type="text/javascript" src="<?php print cesta_dist('polyfills.*.js', $directory); ?>"></script>
<script type="text/javascript" src="<?php print cesta_dist('scripts.*.js', $directory); ?>"></script>
<script type="text/javascript" src="<?php print cesta_dist('main.*.js', $directory); ?>"></script>

