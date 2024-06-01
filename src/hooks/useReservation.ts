export default function useReservation() {
    const getAvailableSpan = async(roomId: string, date: string) => {
        try {
            const res = await fetch("/api/available", {
              method: "POST",
              body: JSON.stringify({
                roomId,
                date,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
      
            return data.availableRooms;
          } catch (error) {
            console.log(error);
          }
    };

    const postReservation = async(roomId: string, date: string, span:number, email:string, displayName: string, phone:string) => {
      try {
          const res = await fetch("/api/reservation", {
            method: "POST",
            body: JSON.stringify({
              roomId,
              date,
              span,
              displayName,
              email,
              phone,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.ok) {
            const data = await res.json();
            return true;
          }
          else {
            return false;
          }
          
        } catch (error) {
          console.log(error);
        }
  };

    return ({
        getAvailableSpan,
        postReservation,
    });
}