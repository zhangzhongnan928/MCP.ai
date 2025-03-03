# MCP Server Index Website

A website that displays the Model Context Protocol (MCP) server index, based on the [Model Context Protocol servers](https://github.com/modelcontextprotocol/servers) repository.

## Overview

This website provides a user-friendly interface to browse, search, and filter the various MCP servers available. The servers are categorized into three main sections:

1. **Reference Servers** - Servers that aim to demonstrate MCP features and the TypeScript and Python SDKs.
2. **Official Integrations** - Servers maintained by companies building production-ready MCP servers for their platforms.
3. **Community Servers** - A growing set of community-developed and maintained servers demonstrating various applications of MCP across different domains.

## Features

- Clean, modern user interface
- Search functionality to find specific servers
- Category filtering to focus on specific types of servers
- Responsive design that works on desktop and mobile devices
- Direct links to GitHub repositories for each server

## Getting Started

To run this website locally:

1. Clone this repository
2. Open `index.html` in your web browser

Alternatively, you can serve it using a local server:

```bash
# Using Python 3
python -m http.server

# Using Node.js
npx serve
```

## Structure

```
mcp-server-index/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling for the website
├── js/
│   └── script.js       # JavaScript for functionality
└── images/             # Directory for images (if any)
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests to improve the website or update the server listings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Model Context Protocol](https://github.com/modelcontextprotocol) for creating the MCP protocol
- All the contributors to the MCP ecosystem 