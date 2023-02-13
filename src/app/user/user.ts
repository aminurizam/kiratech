export interface User {
  name: Name,
  location: Location,
  email: string,
  gender: string,
}

interface Name {
  title: string,
  first: string,
  last: string
}

interface Location {
  street: any,
  city: string,
  coordinates: any,
  country: string,
  postcode: number,
  state: string,
  timezone: Timezone
}

interface Timezone {
  description: string,
  offset: string,
}
