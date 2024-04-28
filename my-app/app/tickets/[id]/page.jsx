import { notFound } from "next/navigation"; // Importing notFound from next/navigation

async function getTicket(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    if (!res.ok) {
      throw new Error("Ticket not found"); // Handle 404 scenario
    }
    return res.json();
  } catch (error) {
    throw new Error("Ticket not found");
  }
}

export default async function TicketDetails({ params }) {
  try {
    const ticket = await getTicket(params.id);

    return (
      <main>
        <nav>
          <h2>Ticket Details</h2>
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
  } catch (error) {
    return notFound();
  }
}
