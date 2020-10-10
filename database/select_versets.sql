select pb.livre_titre,
    pb.texte_titre,
    pb.chapitre,
    pb.verset_depart,
    pb.nombre_versets
from passage_biblique pb
join passage_biblique_traduction pbt on pb.id = pbt.passage_biblique_id
where pbt.langue = 'fr'