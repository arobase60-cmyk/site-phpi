---
title: "Relais bistable"
description: "Relais bistable du système PHPI."
section: "Architecture"
order: 6

---

## Description

Le **relais bistable** est un relais électromécanique capable de conserver sa position après la disparition de la commande électrique.

Contrairement à un relais classique, il ne nécessite pas une alimentation permanente pour maintenir son état. Il change de position uniquement lorsqu'il reçoit une impulsion de commande appropriée.
la carte Bistable 0.33.0 est une carte double. Elle prend 2 emplacements dans le rack. elle est constituée de 33 contacts Translateurs.


## Rôle

Le relais bistable permet :

- de mémoriser un état de fonctionnement ;
- de maintenir une commande sans alimentation continue ;
- de réduire la consommation électrique du système ;
- d'assurer certaines fonctions de verrouillage logique.

## Fonctionnement

Le relais bistable dispose de deux bobines de commande : une bobine gauche et une bobine droite. Une impulsion appliquée sur la bobine gauche positionne l’ensemble des contacts à gauche. De même, une impulsion appliquée sur la bobine droite positionne les contacts à droite. Le relais conserve ensuite sa position jusqu’à la réception d’une nouvelle impulsion.

Pour reproduire cette fonction dans le système CRIS, nous avons développé la carte bistable CRIS B 0.33.0, qui dispose de 33 contacts translateurs. Elle est constituée, en entrée, d’un relais bistable de sécurité dont les contacts commandent plusieurs relais monostables alimentés en permanence. Cette architecture permet ainsi de reproduire électroniquement les différentes positions et fonctions du relais bistable tout en conservant les exigences de sécurité nécessaires au système.

La face avant de la carte dispose de deux LED de signalisation permettant d’indiquer la position du relais : gauche ou droite.

## Supervision

Les élément en supervision sont les suivants:
- Référence de la carte
- Version du logiciel
- Lettre de série
- Numéro de série
- Position 
- Fabricant
- Date de fabrication
- Nombre de commutations

