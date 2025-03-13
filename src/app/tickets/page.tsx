import Link from 'next/link'
import { initialTickets } from '@/data'
import { ticketsPath } from '@/paths'

const TICKET_ICONS = {
  OPEN: 'O',
  DONE: 'X',
}

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{TICKET_ICONS[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketsPath()} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TicketsPage
