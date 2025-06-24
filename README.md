# @johanleroy/dialogue-lib

🧩 **Dialogue-lib** est une bibliothèque Angular standalone permettant d'afficher des **alertes, confirmations ou dialogues personnalisés**, avec animations, timeout, icônes, backdrop et plus encore.

> ✅ Compatible Angular 20+ • 📦 Utilisable en module partagé ou injecté globalement • 🎨 Style avec Tailwind (ou sans)

---

## 📦 Installation

```bash
npm install @angular/animations @johanleroy/dialogue-lib
```

# 🚀 Utilisation de base

### 1. Import du provider dans app.config.ts

```TS
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideDialogues } from '@ton-nom/dialogue-lib';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideDialogues()
    ]
});
```

### 2. Appel depuis un composant

```TS
import { inject } from '@angular/core';
import { DialogueService } from '@johanleroy/dialogue-lib';

export class HomeComponent {
    
    private dialogue = inject(DialogueService);

    showSuccess() {
        this.dialogue.confirm({
            type: 'success',
            title: 'Bravo !',
            text: 'Vous avez réussie',
            confirmText: 'Okay !',
            timeout: 800,
            backdropOpacity: 0.5,
        });
    }

    showError() {
        this.dialogue.confirm({
            type: 'error',
            title: 'Aïeeeee !',
            text: 'Une erreur est survenue',
            confirmText: 'Mince !',
            timeout: 800,
            backdropOpacity: 0.5,
        });
    }

    showQuestion() {
        this.dialogue.confirm({
            type: 'question',
            title: 'Êtes-vous sûr ?',
            text: 'Supprimer définitivement l\'utilisateur ?',
            confirmText: 'Oui, supprimer',
            cancelText: 'Annuler',
            backdropOpacity: 0.5,
        }).then((res: boolean) => {
            if (res) {
                this.deleteUser(id);
            }
        });
    }
    
}
```

# 👨‍💻 Contribution

Les PR sont les bienvenues ! Clone le repo :

```bash
git clone https://github.com/ton-nom/dialogue-lib.git
cd dialogue-lib
npm install
npm run build
```

# 🐛 Bug ou idée d'amélioration ?

Crée une issue ici ou contacte-moi directement.
Tu peux aussi me proposer des améliorations UX ou des nouveaux types de dialogues (ex : prompt, select...).

# 📄 Licence

MIT — © 2025 Johan Leroy