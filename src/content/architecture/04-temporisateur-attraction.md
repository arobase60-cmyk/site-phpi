---
title: "Temporisateur d'attraction"
description: "Temporisateur d'attraction du système PHPI."
section: "Architecture"
order: 4
hero: "/images/architecture/temporisateur-attraction.jpg"
---

## Description
La carte CRIS TA 500 2000 dispose de 2 modules de temporisation à l'attraction réglable (500 ms, 1000 ms ou 2000 ms) et d'un module de supervision.

## Rôle

Le temporisateur d'attraction permet de retarder l'apparition d'une tension en sortie par rapport à une tension de commande.

## Fonctionnement

Le temporisateur utilise deux timers de technologies différentes. Chaque timer commande un relais optomos. Les deux timers sont réglés sur des temporisations légèrement différentes.

À l’apparition d’une commande, les deux timers sont déclenchés simultanément. Le timer 1 commande alors son relais, puis, un peu plus tard, le timer 2 commande à son tour son relais. La tension apparaît alors en sortie.

Un système de surveillance vérifie le bon fonctionnement des deux timers. En cas de problème, la carte est automatiquement mise en repli par un système à fusible, afin de garantir un fonctionnement en sécurité.


## Supervision

Les élément en supervision sont les suivants:
- Référence de la carte
- Version du logiciel
- Lettre de série
- Numéro de série
- Position 
- Fabricant
- Date de fabrication

