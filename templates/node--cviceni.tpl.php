<div class='<?php print $classes ?> clearfix' <?php print ($attributes) ?>>

  <?php if (!empty($content)): ?>
    <div class='clearfix <?php if (!empty($is_prose)) print 'prose' ?>'>
      <?php hide($content['links']); ?>
      <?php hide($content['comments']); ?>
      
      <?php print render($content['field_lekceref']) ?>
      
      <?php print render($content); ?>
      <?php print render($content['links']); ?>
      <?php print render($content['comments']); ?>
    </div>
  <?php endif; ?>

</div>

