const response = new Response(entry.data, {
  status: 200,      // Status code
  statusText: 'OK', // Status text
  headers: {
    'Content-Type': 'application/json'
  }
});
