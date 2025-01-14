// script.js
const genreSelect = document.getElementById('genre');
const durationSelect = document.getElementById('duration');
const moodSelect = document.getElementById('mood');
const recommendationDiv = document.getElementById('recommendation');

const movies = {
    Comedy: {
        Short: {
            Happy: "Duck Soup",
            Relaxed: "The Big Lebowski",
            Excited: "Hot Fuzz",
            Adventurous: "The Goonies"
        },
        Medium: {
            Happy: "The Grand Budapest Hotel",
            Relaxed: "Paddington",
            Excited: "21 Jump Street",
            Adventurous: "Shaun of the Dead"
        },
        Long: {
            Happy: "Forrest Gump",
            Relaxed: "The Intouchables",
            Excited: "The Wolf of Wall Street",
            Adventurous: "Catch Me If You Can"
        }
    },
    Action: {
        Short: {
            Excited: "Mad Max",
            Adventurous: "Taken"
        },
        Medium: {
            Excited: "Die Hard",
            Adventurous: "Mission Impossible"
        },
        Long: {
          Excited: "The Dark Knight",
          Adventurous: "Avengers: Endgame"
        }
    },
    Drama: {
      Short: {
        Relaxed: "Before Sunset",
        Sad: "Manchester by the Sea"
      },
      Medium: {
        Relaxed: "Lost in Translation",
        Sad: "The Shawshank Redemption"
      },
      Long: {
        Relaxed: "The Godfather",
        Sad: "Schindler's List"
      }
    },
    Horror: {
      Short: {
        Excited: "Lights Out",
        Adventurous: "The Descent"
      },
      Medium: {
        Excited: "A Quiet Place",
        Adventurous: "The Babadook"
      },
      Long: {
        Excited: "The Shining",
        Adventurous: "Hereditary"
      }
    },
    "Sci-Fi": {
      Short: {
        Excited: "District 9",
        Adventurous: "Primer"
      },
      Medium: {
        Excited: "Edge of Tomorrow",
        Adventurous: "Arrival"
      },
      Long: {
        Excited: "Inception",
        Adventurous: "Interstellar"
      }
    }
};

function getRecommendation() {
    const genre = genreSelect.value;
    const duration = durationSelect.value;
    const mood = moodSelect.value;

    let recommendation = "";

    if (genre && duration && mood && movies[genre] && movies[genre][duration] && movies[genre][duration][mood]) {
        recommendation = `Based on your preferences, we recommend watching: ${movies[genre][duration][mood]}.`;
    } else if (!genre || !duration || !mood) {
        recommendation = "Please select all options.";
    } else {
        recommendation = "No recommendation found for your criteria.";
    }

    recommendationDiv.textContent = recommendation;
}

genreSelect.addEventListener('change', getRecommendation);
durationSelect.addEventListener('change', getRecommendation);
moodSelect.addEventListener('change', getRecommendation);

getRecommendation();