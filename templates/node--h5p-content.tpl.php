<div class='<?php print $classes ?> clearfix' <?php print ($attributes) ?>>

<?php
$cviceni = cestina_cviceni_pro_ukol($node);
$lekce = cestina_lekce_pro_cviceni($cviceni);
$tema = cestina_tema_pro_lekci($lekce);
$ukoly = cestina_ukoly_vse($tema);
?>

<menu>
<?php print $lekce->title; ?> / <?php print $cviceni->title; ?>
</menu>

  <?php if (!empty($content)): ?>
    <div class='clearfix <?php if (!empty($is_prose)) print 'prose' ?>'>
      <?php hide($content['links']); ?>
      <?php hide($content['comments']); ?>
      <?php print render($content); ?>
      <?php print render($content['links']); ?>
      <?php print render($content['comments']); ?>
    </div>
  <?php endif; ?>

<?php
$ukoly_index = array_search($node->nid, $ukoly);
?>

<?php
if ($ukoly_index > 0) { // predchozi ukol ve cviceni
    print l(t('previous'), 'node/' . $ukoly[$ukoly_index - 1]);
} else { // zacatek - na tema
    print l(t('previous'), 'node/' . $tema->nid);
}
?>

<?php
    print l(t('up'), 'node/' . $tema->nid);
?>

<?php
if ($ukoly_index + 1 < sizeof($ukoly)) { // dalsi ukol
    print l(t('next'), 'node/' . $ukoly[$ukoly_index + 1]);
} else { // konec - na tema
    print l(t('next'), 'node/' . $tema->nid);
}
?>

</div>

