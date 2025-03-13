import { initialTickets } from '@/data'

type TicketPageParams = {
  params: {
    ticketId: string
  }
}

export default function TicketPage({ params }: TicketPageParams) {
  const ticketId = params.ticketId
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId)

  if (!ticket) {
    return <div>Ticket not found</div>
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  )
}
