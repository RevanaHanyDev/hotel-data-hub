export const NAV = [
  ['', [
    ['home', 'Home', 'home'],
  ]],
  ['KNOWLEDGE BASE', [
    ['info', 'Hotel information', 'book', 332],
    ['approvals', 'Approvals', 'check'],
    ['unanswered', 'Unanswered questions', 'help'],
    ['preview', 'Bot answer preview', 'bubble'],
  ]],
  ['GUESTS & SALES', [
    ['leads', 'Leads pipeline', 'leads', 0, true],
    ['guests', 'Guests', 'users', 0, true],
    ['resv', 'Reservations check', 'file', 0, true],
  ]],
  ['OPERATIONS', [
    ['orders', 'Orders board', 'clipboard', 0, true],
    ['chat', 'Chat inbox', 'inbox', 0, true],
  ]],
  ['INSIGHTS', [
    ['reports', 'Reports', 'chart', 0, true],
    ['settings', 'Settings', 'settings'],
  ]],
]

export const TITLES = {
  approvals: 'Approvals', unanswered: 'Unanswered questions', preview: 'Bot answer preview',
  leads: 'Leads pipeline', guests: 'Guests', resv: 'Reservations check',
  orders: 'Orders board', chat: 'Chat inbox', reports: 'Reports', settings: 'Settings',
}

// [name, done, required, subtitle, fields, internal?]
export const CATEGORIES = [
  ['General & contacts', 1, 19, 'Hotel identity · Contacts · Location & access', 32],
  ['Reservations & policies', 0, 22, 'Check-in & check-out · Payment & pricing · Cancellation & changes · Children, extra beds & pets · House rules ...', 51],
  ['Front desk', 0, 22, 'Reception · Luggage storage · Currency exchange · ATM on site · Safe deposit at reception ...', 39],
  ['Rooms & room facilities', 0, 1, 'Room type (one per type) · Housekeeping', 43],
  ['Breakfast', 0, 7, 'Breakfast', 15],
  ['Bar & restaurants', 0, 2, 'Outlet (one per restaurant / bar) · Room service', 33],
  ['Hotel facilities', 0, 57, 'Outdoor swimming pool · Indoor swimming pool · Gym / fitness centre · Spa · Kids club ...', 163],
  ['Services', 0, 28, 'Airport transfer · Taxi / limousine · Car rental · Shuttle bus · Laundry & dry cleaning ...', 74],
  ['Meetings, events & celebrations', 0, 2, 'Meeting room (one per room) · Meetings & events (general) · Weddings & celebrations', 27],
  ['Nearby / local', 0, 8, 'Nearest airport · Train / metro station · City centre · Nearest beach · Hospital ...', 79],
  ['Accessibility, safety & sustainability', 0, 3, 'Accessibility · Safety & security · Sustainability', 17],
  ['Offers & packages', 0, 0, 'Offer (one per offer)', 11],
  ['Internal operations (staff only)', 0, 4, 'Department directory · Procedures', 12, true],
]

export const HOME_STATS = [
  ['Knowledge base complete', '1%', 'var(--pri)', '▯', true],
  ['Required fields missing', '174', 'var(--red)', '!'],
  ['Changes waiting for approval', '0', 'var(--org)', '✓'],
  ['Questions the bots could not answer', '0', 'var(--org)', '?'],
]

export const COMPLETENESS = [
  ['General & contacts', '1/19'], ['Reservations & policies', '0/22'], ['Front desk', '0/22'],
  ['Rooms & room facilities', '0/1'], ['Breakfast', '0/7'], ['Bar & restaurants', '0/2'],
  ['Hotel facilities', '0/57'], ['Services', '0/28'], ['Meetings, events & celebrations', '0/2'],
  ['Nearby / local', '0/8'], ['Accessibility, safety & sustaina...', '0/3'], ['Internal operations (staff only)', '0/4'],
]

export const TODO = ['Star rating', 'Hotel type', 'Adults only', 'Number of rooms', 'Short description']

export const OPERATIONS = [
  ['Open orders', '7', 'var(--pri)', '▤', '1 overdue'],
  ['New leads', '5', 'var(--pri)', '☎'],
  ['Guest chats today', '64', 'var(--pri)', '💬', '87% answered by Joe'],
  ['Booked from chat (7 days)', '$4,860', 'var(--grn)', '↗'],
]
