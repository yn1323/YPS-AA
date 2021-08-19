const response = (req: any, res: any) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'Jhon Doe' }))
}

export default response
