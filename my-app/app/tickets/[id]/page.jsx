async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 30,
      //   revalidate: 0,
    },
  });

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Tickets Details</h2>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} Priority
        </div>
      </div>
    </main>
  );
}
