# @johanleroy/dialogue-lib

🧩 **Dialogue-lib** est une bibliothèque Angular standalone permettant d'afficher des **alertes, confirmations ou dialogues personnalisés**, avec animations, timeout, icônes, backdrop et plus encore.

> ✅ Compatible Angular 20+ • 📦 Utilisable en module partagé ou injecté globalement • 🎨 Style avec Tailwind (ou sans)

---

## 📦 Installation

```bash
npm install @johanleroy/dialogue-lib
```

# 🚀 Utilisation de base

### 1. Import du provider dans main.ts

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

    showAlert() {
        this.dialogue.confirm({
            title: 'Attention !',
            message: 'Cette action est irréversible.',
            icon: 'warning',
            timeout: 5000
        });
    }

    async showConfirm() {
        const confirmed = await this.dialogue.confirm({
            title: 'Supprimer l’élément ?',
            message: 'Cette action ne peut pas être annulée.',
            icon: 'trash'
        });

        if (confirmed) {
            // Suppression...
        }
    }
}
```

# ⚙️ API

- alert(options: DialogueOptions): void 
- title (string) – Titre de l’alerte 
- message (string) – Message affiché 
- icon? (string) – Nom de l’icône (ex : info, warning, check, trash)
- timeout? (number) – Temps avant fermeture automatique (en ms)
- backdrop? (boolean) – Affiche un fond sombre (par défaut : true)
- confirm(options: DialogueOptions): Promise<boolean>
- Comme alert, mais avec boutons Oui / Non 
- Retourne true si l'utilisateur confirme.

# 🎨 Personnalisation

Tu peux override les styles avec Tailwind, ou créer un thème :

```CSS
/* styles.css */
.dialogue-container {
    @apply bg-white rounded-xl shadow-xl p-4;
}
.dialogue-icon-warning {
    @apply text-yellow-500;
}
```

# 📁 Structure recommandée

- src/lib/dialogue.service.ts : gestion centrale 
- src/components/alert.component.ts : composant standalone 
- src/interfaces/options.ts : interface DialogueOptions 
- src/styles/dialogue.css : classes Tailwind par défaut

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