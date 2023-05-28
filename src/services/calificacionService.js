export const calificacionService = {


    getCalificaciones: async () => {    
         
        const response = await fetch("https://firestore.googleapis.com/v1/projects/match-ucc/databases/(default)/documents/usuarios", {
            method: "GET",
        }); 
        const data = await response.json();
        return data;

    }



};