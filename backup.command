#!/bin/bash
# Aller dans le dossier du script
cd "$(dirname "$0")"

echo "⏳ Sauvegarde de l'application LCML sur Google Drive..."

# Lancement de la synchronisation incrémentielle avec rsync
rsync -av --delete --exclude='node_modules' --exclude='.git' --exclude='dist' ./ "/Users/jeremy/Library/CloudStorage/GoogleDrive-jeremylejoly@gmail.com/Mon Drive/LCML_Backup/"

echo ""
echo "✅ Sauvegarde terminée avec succès !"
echo "Le dossier 'LCML_Backup' de votre Google Drive est à jour."
sleep 3
