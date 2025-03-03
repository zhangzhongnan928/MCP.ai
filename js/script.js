document.addEventListener('DOMContentLoaded', () => {
    // Server data from the MCP repository
    const servers = {
        reference: [
            {
                name: "AWS KB Retrieval",
                description: "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server",
                package: "@modelcontextprotocol/server-aws-kb-retrieval"
            },
            {
                name: "Brave Search",
                description: "Web and local search using Brave's Search API",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search",
                package: "@modelcontextprotocol/server-brave-search"
            },
            {
                name: "EverArt",
                description: "AI image generation using various models",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/everart",
                package: "@modelcontextprotocol/server-everart"
            },
            {
                name: "Everything",
                description: "Reference / test server with prompts, resources, and tools",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/everything",
                package: "@modelcontextprotocol/server-everything"
            },
            {
                name: "Fetch",
                description: "Web content fetching and conversion for efficient LLM usage",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",
                package: "@modelcontextprotocol/server-fetch"
            },
            {
                name: "Filesystem",
                description: "Secure file operations with configurable access controls",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem",
                package: "@modelcontextprotocol/server-filesystem"
            },
            {
                name: "Git",
                description: "Tools to read, search, and manipulate Git repositories",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/git",
                package: "mcp-server-git",
                isPython: true
            },
            {
                name: "GitHub",
                description: "Repository management, file operations, and GitHub API integration",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/github",
                package: "@modelcontextprotocol/server-github"
            },
            {
                name: "GitLab",
                description: "GitLab API, enabling project management",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab",
                package: "@modelcontextprotocol/server-gitlab"
            },
            {
                name: "Google Drive",
                description: "File access and search capabilities for Google Drive",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive",
                package: "@modelcontextprotocol/server-gdrive"
            },
            {
                name: "Google Maps",
                description: "Location services, directions, and place details",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps",
                package: "@modelcontextprotocol/server-google-maps"
            },
            {
                name: "Memory",
                description: "Knowledge graph-based persistent memory system",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/memory",
                package: "@modelcontextprotocol/server-memory"
            },
            {
                name: "PostgreSQL",
                description: "Read-only database access with schema inspection",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/postgres",
                package: "@modelcontextprotocol/server-postgres"
            },
            {
                name: "Puppeteer",
                description: "Browser automation and web scraping",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer",
                package: "@modelcontextprotocol/server-puppeteer"
            },
            {
                name: "Sentry",
                description: "Retrieving and analyzing issues from Sentry.io",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/sentry",
                package: "@modelcontextprotocol/server-sentry"
            },
            {
                name: "Sequential Thinking",
                description: "Dynamic and reflective problem-solving through thought sequences",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking",
                package: "@modelcontextprotocol/server-sequentialthinking"
            },
            {
                name: "Slack",
                description: "Channel management and messaging capabilities",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack",
                package: "@modelcontextprotocol/server-slack"
            },
            {
                name: "Sqlite",
                description: "Database interaction and business intelligence capabilities",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite",
                package: "@modelcontextprotocol/server-sqlite"
            },
            {
                name: "Time",
                description: "Time and timezone conversion capabilities",
                link: "https://github.com/modelcontextprotocol/servers/tree/main/src/time",
                package: "@modelcontextprotocol/server-time"
            }
        ],
        official: [
            {
                name: "21st.dev Magic",
                description: "Create crafted UI components inspired by the best 21st.dev design engineers",
                link: "https://github.com/21st-dev/magic-mcp",
                package: "magic-mcp"
            },
            {
                name: "Apify",
                description: "Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce, social media, search engines, maps, and more",
                link: "https://github.com/apify/actors-mcp-server",
                package: "actors-mcp-server"
            },
            {
                name: "Axiom",
                description: "Query and analyze your Axiom logs, traces, and all other event data in natural language",
                link: "https://github.com/axiomhq/mcp-server-axiom",
                package: "mcp-server-axiom"
            },
            {
                name: "Browserbase",
                description: "Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more)",
                link: "https://github.com/browserbase/mcp-server-browserbase",
                package: "mcp-server-browserbase"
            },
            {
                name: "Cloudflare",
                description: "Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1)",
                link: "https://github.com/cloudflare/mcp-server-cloudflare",
                package: "mcp-server-cloudflare"
            },
            {
                name: "E2B",
                description: "Run code in secure sandboxes hosted by E2B",
                link: "https://github.com/e2b-dev/mcp-server",
                package: "mcp-server"
            },
            {
                name: "eSignatures",
                description: "Contract and template management for drafting, reviewing, and sending binding contracts",
                link: "https://github.com/esignaturescom/mcp-server-esignatures",
                package: "mcp-server-esignatures"
            },
            {
                name: "Exa",
                description: "Search Engine made for AIs by Exa",
                link: "https://github.com/exa-labs/exa-mcp-server",
                package: "exa-mcp-server"
            },
            {
                name: "Firecrawl",
                description: "Extract web data with Firecrawl",
                link: "https://github.com/mendableai/firecrawl-mcp-server",
                package: "firecrawl-mcp-server"
            },
            {
                name: "Fireproof",
                description: "Immutable ledger database with live synchronization",
                link: "https://github.com/fireproof-storage/mcp-database-server",
                package: "mcp-database-server"
            }
        ],
        community: [
            {
                name: "AWS S3",
                description: "A sample MCP server for AWS S3 that flexibly fetches objects from S3 such as PDF documents",
                link: "https://github.com/aws-samples/sample-mcp-server-s3",
                package: "sample-mcp-server-s3"
            },
            {
                name: "AWS",
                description: "Perform operations on your AWS resources using an LLM",
                link: "https://github.com/rishikavikondala/mcp-server-aws",
                package: "mcp-server-aws"
            },
            {
                name: "Airtable",
                description: "Read and write access to Airtable databases, with schema inspection",
                link: "https://github.com/domdomegg/airtable-mcp-server",
                package: "airtable-mcp-server"
            },
            {
                name: "AlphaVantage",
                description: "MCP server for stock market data API AlphaVantage",
                link: "https://github.com/calvernaz/alphavantage",
                package: "alphavantage-mcp-server"
            },
            {
                name: "Anki",
                description: "An MCP server for interacting with your Anki decks and cards",
                link: "https://github.com/scorzeth/anki-mcp-server",
                package: "anki-mcp-server"
            },
            {
                name: "Any Chat Completions",
                description: "Interact with any OpenAI SDK Compatible Chat Completions API like OpenAI, Perplexity, Groq, xAI and many more",
                link: "https://github.com/pyroprompts/any-chat-completions-mcp",
                package: "any-chat-completions-mcp"
            },
            {
                name: "ArangoDB",
                description: "MCP Server that provides database interaction capabilities through ArangoDB",
                link: "https://github.com/ravenwits/mcp-server-arangodb",
                package: "mcp-server-arangodb"
            },
            {
                name: "Atlassian",
                description: "Interact with Atlassian Cloud products (Confluence and Jira) including searching/reading Confluence spaces/pages, accessing Jira issues, and project metadata",
                link: "https://github.com/sooperset/mcp-atlassian",
                package: "mcp-atlassian"
            },
            {
                name: "Base Free USDC Transfer",
                description: "Send USDC on Base for free using Claude AI! Built with Coinbase CDP",
                link: "https://github.com/magnetai/mcp-free-usdc-transfer",
                package: "mcp-free-usdc-transfer"
            },
            {
                name: "BigQuery",
                description: "This server enables LLMs to inspect database schemas and execute queries on BigQuery",
                link: "https://github.com/LucasHild/mcp-server-bigquery",
                package: "mcp-server-bigquery"
            }
        ]
    };
    
    // Function to create a server card element
    function createServerCard(server) {
        const card = document.createElement('div');
        card.className = 'server-card';
        
        const header = document.createElement('div');
        header.className = 'card-header';
        header.textContent = server.name;
        
        const body = document.createElement('div');
        body.className = 'card-body';
        
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = server.description;
        
        const links = document.createElement('div');
        links.className = 'links';
        
        const githubLink = document.createElement('a');
        githubLink.className = 'btn';
        githubLink.href = server.link;
        githubLink.target = '_blank';
        githubLink.textContent = 'GitHub';
        
        const claudeButton = document.createElement('button');
        claudeButton.className = 'btn claude-btn';
        claudeButton.innerHTML = '<i class="fas fa-plus"></i> Add to Claude';
        claudeButton.addEventListener('click', () => {
            addToClaudeDesktop(server);
        });
        
        links.appendChild(githubLink);
        links.appendChild(claudeButton);
        body.appendChild(description);
        body.appendChild(links);
        
        card.appendChild(header);
        card.appendChild(body);
        
        return card;
    }
    
    // Function to generate Claude config
    function generateClaudeConfig(server) {
        // Create a server name from the server's name (lowercase, remove special chars)
        const serverName = server.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        
        // Create the proper configuration format
        let config = {
            mcpServers: {}
        };
        
        if (server.isPython) {
            // For Python-based servers
            config.mcpServers[serverName] = {
                command: "uvx",
                args: [server.package]
            };
        } else {
            // For JavaScript/TypeScript-based servers
            config.mcpServers[serverName] = {
                command: "npx",
                args: ["-y", server.package]
            };
        }
        
        return config;
    }
    
    // Function to add a server to Claude Desktop
    function addToClaudeDesktop(server) {
        const config = generateClaudeConfig(server);
        const configStr = JSON.stringify(config, null, 2);
        const serverName = server.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        
        // Create a modal dialog with installation options
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
        };
        
        const title = document.createElement('h3');
        title.textContent = `Add ${server.name} to Claude Desktop`;
        
        const instructions = document.createElement('p');
        instructions.innerHTML = 'Choose how you want to add this server to Claude Desktop:';
        
        // Finding existing config section
        const findConfigSection = document.createElement('div');
        findConfigSection.className = 'modal-section find-config-section';
        
        const findConfigTitle = document.createElement('h4');
        findConfigTitle.textContent = 'Where to Find Your Existing Configuration';
        
        const findConfigDesc = document.createElement('p');
        findConfigDesc.innerHTML = 'Before merging, you need to locate your existing <code>claude_desktop_config.json</code> file:';
        
        const locationList = document.createElement('ul');
        locationList.className = 'config-locations';
        
        // macOS location
        const macLocation = document.createElement('li');
        macLocation.className = 'config-location';
        macLocation.innerHTML = '<strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>';
        
        const macExpanded = document.createElement('div');
        macExpanded.className = 'expanded-location';
        macExpanded.innerHTML = 'This translates to: <code>/Users/YOUR_USERNAME/Library/Application Support/Claude/claude_desktop_config.json</code>';
        
        const macOpenBtn = document.createElement('button');
        macOpenBtn.className = 'btn small-btn';
        macOpenBtn.innerHTML = '<i class="fas fa-terminal"></i> Open in Terminal';
        macOpenBtn.onclick = () => {
            navigator.clipboard.writeText('open ~/Library/Application\\ Support/Claude/').then(() => {
                macOpenBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    macOpenBtn.innerHTML = '<i class="fas fa-terminal"></i> Open in Terminal';
                }, 2000);
            });
        };
        
        macExpanded.appendChild(macOpenBtn);
        macLocation.appendChild(macExpanded);
        
        // Windows location
        const winLocation = document.createElement('li');
        winLocation.className = 'config-location';
        winLocation.innerHTML = '<strong>Windows:</strong> <code>%APPDATA%\\Claude\\claude_desktop_config.json</code>';
        
        const winExpanded = document.createElement('div');
        winExpanded.className = 'expanded-location';
        winExpanded.innerHTML = 'This translates to: <code>C:\\Users\\YOUR_USERNAME\\AppData\\Roaming\\Claude\\claude_desktop_config.json</code>';
        
        const winOpenBtn = document.createElement('button');
        winOpenBtn.className = 'btn small-btn';
        winOpenBtn.innerHTML = '<i class="fas fa-terminal"></i> Open in Command Prompt';
        winOpenBtn.onclick = () => {
            navigator.clipboard.writeText('explorer %APPDATA%\\Claude').then(() => {
                winOpenBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    winOpenBtn.innerHTML = '<i class="fas fa-terminal"></i> Open in Command Prompt';
                }, 2000);
            });
        };
        
        winExpanded.appendChild(winOpenBtn);
        winLocation.appendChild(winExpanded);
        
        const configTip = document.createElement('p');
        configTip.className = 'config-tip';
        configTip.innerHTML = '<strong>Tip:</strong> If you\'ve never added an MCP server before, the file might not exist yet. In that case, use Option 2 or 3 below instead.';
        
        locationList.appendChild(macLocation);
        locationList.appendChild(winLocation);
        
        findConfigSection.appendChild(findConfigTitle);
        findConfigSection.appendChild(findConfigDesc);
        findConfigSection.appendChild(locationList);
        findConfigSection.appendChild(configTip);
        
        // Option 1: Merge with existing config
        const mergeSection = document.createElement('div');
        mergeSection.className = 'modal-section';
        
        const mergeTitle = document.createElement('h4');
        mergeTitle.textContent = 'Option 1: Merge with Your Existing Configuration';
        
        const mergeDesc = document.createElement('p');
        mergeDesc.innerHTML = 'Already have MCP servers configured? Upload your existing <code>claude_desktop_config.json</code> file to merge with this new server:';
        
        // File upload area with drag and drop
        const uploadArea = document.createElement('div');
        uploadArea.className = 'upload-area';
        uploadArea.innerHTML = '<div class="drag-instructions"><i class="fas fa-cloud-upload-alt"></i><div>Drag & drop your config file here<br>or click to browse</div></div>';
        
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = 'configFileUpload';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        
        const uploadLabel = document.createElement('label');
        uploadLabel.htmlFor = 'configFileUpload';
        uploadLabel.className = 'upload-btn';
        uploadLabel.innerHTML = '<i class="fas fa-upload"></i> Select Your Config File';
        
        const uploadStatus = document.createElement('div');
        uploadStatus.className = 'upload-status';
        uploadStatus.innerHTML = 'No file selected';
        
        const mergeDownloadBtn = document.createElement('button');
        mergeDownloadBtn.className = 'btn download-btn';
        mergeDownloadBtn.innerHTML = '<i class="fas fa-download"></i> Merge & Download';
        mergeDownloadBtn.disabled = true;
        mergeDownloadBtn.style.opacity = '0.6';
        
        // Variable to store the merged config
        let mergedConfig = null;
        
        // Process the uploaded file
        function processUploadedFile(file) {
            if (!file) {
                uploadStatus.innerHTML = 'No file selected';
                mergeDownloadBtn.disabled = true;
                mergeDownloadBtn.style.opacity = '0.6';
                uploadArea.classList.remove('file-selected');
                return;
            }
            
            uploadStatus.innerHTML = `Selected: ${file.name}`;
            uploadArea.classList.add('file-selected');
            
            const reader = new FileReader();
            reader.onload = function(event) {
                try {
                    // Parse the JSON content
                    let existingConfig;
                    try {
                        existingConfig = JSON.parse(event.target.result);
                    } catch (parseError) {
                        throw new Error('Invalid JSON format: ' + parseError.message);
                    }
                    
                    // Get new server name
                    const serverConfig = config.mcpServers;
                    const serverName = Object.keys(serverConfig)[0];
                    
                    // Initialize the merged config
                    let mergedConfig = JSON.parse(JSON.stringify(existingConfig));
                    
                    // Make sure mcpServers object exists
                    if (!mergedConfig.mcpServers) {
                        mergedConfig.mcpServers = {};
                    }
                    
                    // Check if this server is already in the config
                    if (mergedConfig.mcpServers[serverName]) {
                        uploadStatus.innerHTML = `<span class="warning">${server.name} is already in your configuration</span>`;
                    } else {
                        // Add the new server to the config
                        mergedConfig.mcpServers[serverName] = serverConfig[serverName];
                        
                        // Count how many servers are in the config
                        const serversCount = Object.keys(mergedConfig.mcpServers).length;
                        uploadStatus.innerHTML = `<span class="success">Ready to merge with ${serversCount} server${serversCount !== 1 ? 's' : ''}</span>`;
                    }
                    
                    // Save the merged config for the download button
                    window.mergedConfig = mergedConfig;
                    
                    mergeDownloadBtn.disabled = false;
                    mergeDownloadBtn.style.opacity = '1';
                } catch (err) {
                    uploadStatus.innerHTML = `<span class="error">Error: ${err.message}</span>`;
                    
                    // Add a help message with correct format example
                    const helpMessage = document.createElement('div');
                    helpMessage.className = 'help-message';
                    helpMessage.innerHTML = `
                        <p>Your configuration file should have this structure:</p>
                        <pre>{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "package-name"]
    }
  }
}</pre>
                        <p>Don't worry if it's empty - we'll create a valid structure for you.</p>
                        <p><a href="#" id="createEmptyConfig">Or click here to create a new configuration file</a></p>
                    `;
                    
                    uploadStatus.appendChild(helpMessage);
                    
                    // Add event listener to the "create empty" link
                    document.getElementById('createEmptyConfig').addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Create empty config with the new server
                        window.mergedConfig = config;
                        
                        uploadStatus.innerHTML = `<span class="success">Created new configuration with ${server.name}</span>`;
                        mergeDownloadBtn.disabled = false;
                        mergeDownloadBtn.style.opacity = '1';
                    });
                    
                    mergeDownloadBtn.disabled = true;
                    mergeDownloadBtn.style.opacity = '0.6';
                }
            };
            
            reader.readAsText(file);
        }
        
        // Handle file upload through input
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            processUploadedFile(file);
        });
        
        // Handle drag and drop events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            uploadArea.classList.add('highlight');
        }
        
        function unhighlight() {
            uploadArea.classList.remove('highlight');
        }
        
        uploadArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const file = dt.files[0];
            processUploadedFile(file);
        }
        
        // Click anywhere in upload area to trigger file input
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Handle merged download
        mergeDownloadBtn.onclick = () => {
            if (!window.mergedConfig) return;
            
            const mergedConfigStr = JSON.stringify(window.mergedConfig, null, 2);
            const blob = new Blob([mergedConfigStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'claude_desktop_config.json';
            document.body.appendChild(a);
            a.click();
            
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
            
            mergeDownloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                mergeDownloadBtn.innerHTML = '<i class="fas fa-download"></i> Merge & Download';
            }, 2000);
        };
        
        uploadArea.appendChild(fileInput);
        
        // Option 2: Direct Integration
        const directSection = document.createElement('div');
        directSection.className = 'modal-section';
        
        const directTitle = document.createElement('h4');
        directTitle.textContent = 'Option 2: Direct Integration';
        
        const directDesc = document.createElement('p');
        directDesc.innerHTML = 'Download the config file and open your Claude config location with one click:';
        
        const directActions = document.createElement('div');
        directActions.className = 'direct-actions';
        
        // Create download button
        const downloadBtnDirect = document.createElement('button');
        downloadBtnDirect.className = 'btn download-btn';
        downloadBtnDirect.innerHTML = '<i class="fas fa-download"></i> Download New Config';
        downloadBtnDirect.onclick = () => {
            // Create a Blob with the configuration
            const blob = new Blob([configStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            // Create a download link and trigger it
            const a = document.createElement('a');
            a.href = url;
            a.download = `claude_desktop_config.json`;
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
            
            // Update button text
            downloadBtnDirect.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                downloadBtnDirect.innerHTML = '<i class="fas fa-download"></i> Download New Config';
            }, 2000);
        };
        
        // Create Open Config Dir Buttons - Platform specific
        const platformButtons = document.createElement('div');
        platformButtons.className = 'platform-buttons';
        
        // macOS button
        const macButton = document.createElement('a');
        macButton.className = 'btn platform-btn';
        macButton.innerHTML = '<i class="fab fa-apple"></i> Open macOS Config';
        // Use the file:// protocol to attempt to open the directory - this will only work if the browser allows it
        macButton.href = 'file:///Users/' + (navigator.userHome || 'Shared') + '/Library/Application Support/Claude/';
        macButton.setAttribute('target', '_blank');
        
        // Windows button
        const winButton = document.createElement('a');
        winButton.className = 'btn platform-btn';
        winButton.innerHTML = '<i class="fab fa-windows"></i> Open Windows Config';
        winButton.href = 'file:///C:/Users/' + (navigator.userHome || 'Default') + '/AppData/Roaming/Claude/'; 
        winButton.setAttribute('target', '_blank');
        
        platformButtons.appendChild(macButton);
        platformButtons.appendChild(winButton);
        
        // Detection message
        const detectionNote = document.createElement('p');
        detectionNote.className = 'detection-note';
        detectionNote.innerHTML = '<small>Note: Opening the config location directly may be blocked by browser security. If that happens, use the other options instead.</small>';
        
        // Option 3: Download configuration file
        const downloadSection = document.createElement('div');
        downloadSection.className = 'modal-section';
        
        const downloadTitle = document.createElement('h4');
        downloadTitle.textContent = 'Option 3: Download Configuration File';
        
        const downloadDesc = document.createElement('p');
        downloadDesc.innerHTML = '<strong>Warning:</strong> This will create a new configuration file with only this server. If you already have other MCP servers configured, use Option 1 instead.';
        
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'btn download-btn';
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download New Config File';
        downloadBtn.onclick = () => {
            // Create a Blob with the configuration
            const blob = new Blob([configStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            // Create a download link and trigger it
            const a = document.createElement('a');
            a.href = url;
            a.download = `claude_desktop_config.json`;
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
            
            // Update button text
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download New Config File';
            }, 2000);
        };
        
        // Option 4: Copy to clipboard
        const copySection = document.createElement('div');
        copySection.className = 'modal-section';
        
        const copyTitle = document.createElement('h4');
        copyTitle.textContent = 'Option 4: Copy Configuration';
        
        const copyDesc = document.createElement('p');
        copyDesc.innerHTML = 'Copy the configuration and manually add it to your Claude Desktop settings file.';
        
        const pre = document.createElement('pre');
        pre.textContent = configStr;
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn copy-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy to Clipboard';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(configStr).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy to Clipboard';
                }, 2000);
            });
        };
        
        // Installation instructions
        const installSection = document.createElement('div');
        installSection.className = 'modal-section install-instructions';
        
        const installTitle = document.createElement('h4');
        installTitle.textContent = 'Installation Instructions';
        
        const installSteps = document.createElement('ol');
        
        // macOS
        const macStep = document.createElement('li');
        macStep.innerHTML = '<strong>macOS:</strong> Place the config file in <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>';
        
        // Open Terminal Command for macOS
        const macTerminalStep = document.createElement('li');
        macTerminalStep.className = 'terminal-command';
        macTerminalStep.innerHTML = '<strong>macOS Terminal:</strong> Run this command to open the config folder:<br><code>open ~/Library/Application\\ Support/Claude/</code> <button class="copy-command-btn" data-command="open ~/Library/Application\\ Support/Claude/"><i class="fas fa-copy"></i></button>';
        
        // Windows
        const winStep = document.createElement('li');
        winStep.innerHTML = '<strong>Windows:</strong> Place the config file in <code>%APPDATA%\\Claude\\claude_desktop_config.json</code>';
        
        // Open Command for Windows
        const winCmdStep = document.createElement('li');
        winCmdStep.className = 'terminal-command';
        winCmdStep.innerHTML = '<strong>Windows Command:</strong> Run this command to open the config folder:<br><code>explorer %APPDATA%\\Claude</code> <button class="copy-command-btn" data-command="explorer %APPDATA%\\Claude"><i class="fas fa-copy"></i></button>';
        
        // Restart Claude
        const restartStep = document.createElement('li');
        restartStep.textContent = 'Restart Claude Desktop to apply the changes';
        
        installSteps.appendChild(macStep);
        installSteps.appendChild(macTerminalStep);
        installSteps.appendChild(winStep);
        installSteps.appendChild(winCmdStep);
        installSteps.appendChild(restartStep);
        
        // Add documentation link
        const docLink = document.createElement('p');
        docLink.className = 'doc-link';
        docLink.innerHTML = 'For more details, see the <a href="https://modelcontextprotocol.io/introduction" target="_blank">MCP documentation</a>.';
        
        // Assemble the modal
        mergeSection.appendChild(mergeTitle);
        mergeSection.appendChild(mergeDesc);
        mergeSection.appendChild(uploadArea);
        mergeSection.appendChild(uploadStatus);
        mergeSection.appendChild(mergeDownloadBtn);
        
        directActions.appendChild(downloadBtnDirect);
        directActions.appendChild(platformButtons);
        
        directSection.appendChild(directTitle);
        directSection.appendChild(directDesc);
        directSection.appendChild(directActions);
        directSection.appendChild(detectionNote);
        
        downloadSection.appendChild(downloadTitle);
        downloadSection.appendChild(downloadDesc);
        downloadSection.appendChild(downloadBtn);
        
        copySection.appendChild(copyTitle);
        copySection.appendChild(copyDesc);
        copySection.appendChild(pre);
        copySection.appendChild(copyBtn);
        
        installSection.appendChild(installTitle);
        installSection.appendChild(installSteps);
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(title);
        modalContent.appendChild(instructions);
        modalContent.appendChild(findConfigSection);
        modalContent.appendChild(mergeSection);
        modalContent.appendChild(directSection);
        modalContent.appendChild(downloadSection);
        modalContent.appendChild(copySection);
        modalContent.appendChild(installSection);
        modalContent.appendChild(docLink);
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Add event listeners for copy command buttons
        document.querySelectorAll('.copy-command-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const command = this.getAttribute('data-command');
                navigator.clipboard.writeText(command).then(() => {
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                });
            });
        });
    }
    
    // Populate server sections
    function populateServers() {
        const referenceGrid = document.getElementById('reference-servers-grid');
        const officialGrid = document.getElementById('official-integrations-grid');
        const communityGrid = document.getElementById('community-servers-grid');
        
        // Clear existing content
        referenceGrid.innerHTML = '';
        officialGrid.innerHTML = '';
        communityGrid.innerHTML = '';
        
        // Populate reference servers
        servers.reference.forEach(server => {
            referenceGrid.appendChild(createServerCard(server));
        });
        
        // Populate official integrations
        servers.official.forEach(server => {
            officialGrid.appendChild(createServerCard(server));
        });
        
        // Populate community servers
        servers.community.forEach(server => {
            communityGrid.appendChild(createServerCard(server));
        });
    }
    
    // Filter servers by category
    function filterServers(category) {
        const referenceSection = document.getElementById('reference-servers');
        const officialSection = document.getElementById('official-integrations');
        const communitySection = document.getElementById('community-servers');
        
        if (category === 'all') {
            referenceSection.classList.remove('hidden');
            officialSection.classList.remove('hidden');
            communitySection.classList.remove('hidden');
        } else if (category === 'reference') {
            referenceSection.classList.remove('hidden');
            officialSection.classList.add('hidden');
            communitySection.classList.add('hidden');
        } else if (category === 'official') {
            referenceSection.classList.add('hidden');
            officialSection.classList.remove('hidden');
            communitySection.classList.add('hidden');
        } else if (category === 'community') {
            referenceSection.classList.add('hidden');
            officialSection.classList.add('hidden');
            communitySection.classList.remove('hidden');
        }
    }
    
    // Search functionality
    function searchServers(query) {
        query = query.toLowerCase();
        
        const allServerCards = document.querySelectorAll('.server-card');
        
        allServerCards.forEach(card => {
            const serverName = card.querySelector('.card-header').textContent.toLowerCase();
            const serverDesc = card.querySelector('.description').textContent.toLowerCase();
            
            if (serverName.includes(query) || serverDesc.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Initialize the page
    populateServers();
    
    // Set up event listeners for filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterServers(filter);
        });
    });
    
    // Set up search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', () => {
        searchServers(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchServers(searchInput.value);
        }
    });
    
    // Close modal when clicking outside of it
    window.onclick = (event) => {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (event.target === modals[i]) {
                document.body.removeChild(modals[i]);
            }
        }
    };
}); 