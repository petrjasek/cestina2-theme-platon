<?php
$lekce = cestina_lekce($node);
?>

<div class='<?php print $classes ?> clearfix' <?php print ($attributes) ?>>

  <?php foreach($lekce as $l) { ?>

  <h2>Lekce: <?php print $l->title; ?></h2>

<?php foreach (cestina_cviceni($l) as $c) {
    $ukoly = cestina_ukoly($c);
    $first = array_keys($ukoly)[0];
?>
  <h3><?php print l($c->title, "node/" . $ukoly[$first]->nid); ?></h3>
<?php } ?>
    
  <?php } ?>

  <?php if (!empty($content)): ?>
    <div class='clearfix <?php if (!empty($is_prose)) print 'prose' ?>'>
      <?php hide($content['links']); ?>
      <?php hide($content['comments']); ?>
      
      <div class="icon-title"><?php print $title; ?></div><?php print render($content['field_ikona']) ?>
      
      <div class="field field-name-field-lekceref field-type-entityreference field-label-hidden">  
        <a href="/">zpět</a>
      </div>
      
      <?php print render($content); ?>
      <?php print render($content['links']); ?>
      <?php print render($content['comments']); ?>
    </div>
  <?php endif; ?>

</div>
