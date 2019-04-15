# Tmux

## Base Shortcuts

```
> <Ctrl> + <b> suivi de <c> : Créer un nouveau terminal dans la session tmux active
> <Ctrl> + <b> suivi de <n> : Switcher entre les différents terminaux de la session
> <Ctrl> + <b> suivi de <X> : Choisir un terminal spécifique (ou X est le numéro du terminal)
> <Ctrl> + <b> suivi de <d> : Se détacher de la session tmux (lancer 'tmux a' pour s'y rattacher)
> <Ctrl> + <b> suivi de <,> : Permet de renommer un terminal
> <Ctrl> + <b> suivi de <w> : Affiche la liste des terminaux disponibles
> <Ctrl> + <b> suivi de <t> : Afficher l’heure dans un terminal
> <Ctrl> + <b> suivi de <[> : Permet de scroller ligne/ligne (avec les fleches du clavier ou la souris) ou même page/page avec PgnUP et PgnDOWN, tapez "q" pour quiter ce mode
```

## Commands in a Split

```
> <Ctrl> + <b> suivi de <"> : Split horizontal du terminal courant en deux + ouverture d’un terminal dans le nouveau panel
> <Ctrl> + <b> suivi de <%> : Split vertical du terminal courant en deux + ouverture d’un terminal dans le nouveau panel
> <Ctrl> + <b> suivi de <o> : Switcher entre les terminaux splittés
> <Ctrl> + <b> suivi de <espace> : Changer l’organisation visuelle des terminaux splittés
> <Ctrl> + <b> suivi de <Alt> + (flèches directionnelles) : Reduire, agrandir fenêtre du split
> <Ctrl> + <b> suivi de <!> : Convertir un split en terminal seul
> <Ctrl> + <b> suivi de <q> : Afficher les numéros des terminaux splittés
> <Ctrl> + <b> puis saisissez :join : permet de joindre un terminal seul dans un split
```

## Configuration

The file ~/.tmux.conf allow to add some useful functionnalities:

Define the default shell:

```
> set-option -g default-shell /usr/bin/zsh
```

Add the mouse integration in a virtual terminal (before the version 2.1):

```
> setw -g mode-mouse on
> set -g mouse-resize-pane on
> set -g mouse-select-pane on
> set -g mouse-select-window on
```

Add the mouse integration in a virtual terminal (until the version 2.1):

```
> set -g mouse on
```
