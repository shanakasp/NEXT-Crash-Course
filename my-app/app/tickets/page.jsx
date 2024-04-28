import { Suspense } from "react";
import Loading from "../loading";
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

      <Suspense fallback={<Loading></Loading>}>
        {" "}
        <TicketList></TicketList>
      </Suspense>
    </main>
  );
}
