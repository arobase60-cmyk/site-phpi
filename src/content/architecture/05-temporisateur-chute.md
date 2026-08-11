---
title: "Temporisateur de chute"
description: "Temporisateur de chute du système PHPI."
section: "Architecture"
order: 5

---

## Description
La carte CRIS TC 2 25 dispose de 2 modules de temporisation à la chute réglable et d'un module de supervision.

## Rôle

Le temporisateur à la chute permet de maintenir une tension en sortie lors de la disparition de la commande.

## Fonctionnement

Le temporisateur utilise deux timers de technologies différentes. Chaque timer commande un relais optomos. Les deux timers sont réglés sur des temporisations légèrement différentes.

À la disparition de la commande d’entrée, les deux timers sont déclenchés simultanément. Le timer 1 commande alors son relais, puis, un peu plus tard, le timer 2 commande à son tour son relais. Cette succession de commandes provoque finalement la disparition de la tension en sortie.

Un système de surveillance permet de vérifier le bon fonctionnement des deux timers. En cas de défaillance, la carte est automatiquement mise en repli par un système à fusible, afin de garantir un état sûr.


## Supervision

Les élément en supervision sont les suivants:
- Référence de la carte
- Version du logiciel
- Lettre de série
- Numéro de série
- Position 
- Fabricant
- Date de fabrication

