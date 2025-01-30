// Parcours du tableau `data` pour générer le contenu HTML
data.forEach(item => {
    // Crée un bloc HTML pour chaque musique
    const musiqueBloc = document.createElement("section");
    musiqueBloc.style.border = "1px solid #ccc";
    musiqueBloc.style.padding = "10px";
    musiqueBloc.style.margin = "10px 0";

    // Titre de la musique
    const titre = document.createElement("h2");
    titre.textContent = item.musique;
    musiqueBloc.appendChild(titre);

    // Description de la musique
    const description = document.createElement("p");
    description.textContent = item.descriptionMusicale;
    musiqueBloc.appendChild(description);

    // Audio (si disponible)
    let audio;
    if (item.audioURL) {
        audio = document.createElement("audio");
        audio.src = item.audioURL;
        musiqueBloc.appendChild(audio);
    }

    // Bouton lecture/pause
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("play");
    toggleButton.textContent = "⏵ Lecture"; // Texte initial
    musiqueBloc.appendChild(toggleButton);

    // Ajoute un gestionnaire de clic pour le bouton
    toggleButton.addEventListener("click", () => {
        if (audio) {
            if (toggleButton.textContent === "⏵ Lecture") {
                // Si le bouton est en mode Lecture
                audio.play();
                toggleButton.textContent = "⏸ Pause"; // Change le texte
            } else {
                // Si le bouton est en mode Pause
                audio.pause();
                toggleButton.textContent = "⏵ Lecture"; // Change le texte
            }
        }
    });

    // Ajoute le bloc au document
    document.body.appendChild(musiqueBloc);
    const message = "Je n’ai aucune suggestion de musique mais je vous félicite pour votre site web de sélection musicale que je trouve très réussi !";
const email = "philippe.gambette@univ-eiffel.fr";
const login = "Nathan";

const encodedURL = `https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?login=${login}&message=${encodeURIComponent(message)}&email=${encodeURIComponent(email)}`;
console.log(encodedURL);
});

