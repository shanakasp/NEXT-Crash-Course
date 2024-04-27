import TicketList from "./TicketList";

export default function News() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets...</small>
          </p>
        </div>
      </nav>
      <TicketList></TicketList>
    </main>
  );
}
