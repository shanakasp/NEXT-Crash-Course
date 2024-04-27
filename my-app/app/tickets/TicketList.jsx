import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 30,
      //   revalidate: 0,
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <div>
      <h3>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} Priority
              </div>
            </Link>
          </div>
        ))}
        {tickets.length === 0 && (
          <p className="text-center">There Are No Open Tickets</p>
        )}
      </h3>
    </div>
  );
}

// Tickets/id
