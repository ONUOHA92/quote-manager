export interface Event {
  id: number;
  name?: string;
  time?: string;
  datetime?: string;
  quote?: string;
  total?: string;
  href?: string;
}

export interface Day {
  date?: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  events: Event[];
}
