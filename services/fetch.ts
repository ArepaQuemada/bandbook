/**
 * Class that handles api calls
 */
export class Fetch {
  private uri: string

  constructor(uri?: string) {
    this.uri = uri
  }

  setUri(uri) {
    this.uri = uri
  }

  async get() {
    const response = await fetch(this.uri)
    const data = await response.json()
    return data
  }

  async post(body) {
    const response = await fetch(this.uri, {
      body: JSON.stringify(body),
      method: 'POST',
    })
    const data = await response.json()
    return { status: response.status, data }
  }
}
