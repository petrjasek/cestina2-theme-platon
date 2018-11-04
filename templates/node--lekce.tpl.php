<div class='<?php print $classes ?> clearfix' <?php print ($attributes) ?>>

  <?php if (!empty($content)): ?>
    <div class='clearfix <?php if (!empty($is_prose)) print 'prose' ?>'>
      <?php hide($content['links']); ?>
      <?php hide($content['comments']); ?>
      
      <?php
      $view = views_get_view('lekce_ikona');
      $display = $view->execute_display('block_1');
      print $display['content'];
      ?>
      
      <?php 
      $view = views_get_view('zpet');
      $display = $view->execute_display('block'); 
      print $display['content']; 
      ?>
      
      <h2 class="second-title"><?php print $title; ?></h2>
      
      <?php print render($content); ?>
      <?php print render($content['links']); ?>
      <?php print render($content['comments']); ?>
    </div>
  <?php endif; ?>

</div>

