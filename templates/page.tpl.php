<?php print $platon__header; ?>
<?php print $platon__site_content; ?>
<?php print $platon__footer; ?>

  <?php if (!(empty($tabs['#primary']) && empty($tabs['#secondary'])) && empty($hide_tabs)): ?>
    <div id="tabs">
      <?php print render($tabs); ?>
    </div>
  <?php endif; ?>
