---
title: "Rupteur"
description: "Module rupteur du système PHPI."
section: "Architecture"
order: 9

---

## Description

La carte rupteur  constituée de 2 modules rupteur et d'un module de supervision.


## Rôle

La carte Rupteur est destinée à la commande des moteurs d'aiguille.

## Fonctionnement

Le fonctionnement reprend celui de la carte CRIS P 4.0.4. La principale évolution concerne les contacts utilisés pour la commande des moteurs d’aiguilles.

Un composant électronique est inséré en série avec les contacts des relais afin de prendre en charge les courants d’extrarupture. Les contacts des relais sont ainsi protégés, ce qui améliore considérablement la fiabilité de la carte.

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