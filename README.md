<h1>Next.js PostgreSQL Auth Starter</h1>
<p>This is a starter project for building web applications using Next.js, PostgreSQL, Prisma and Next-Auth for authentication.</p>
<h2>Configuration and Setup</h2>
<p>Follow the steps below to configure and run the project:</p>
<ol>
    <li>Navigate to the <code>PostgreSQL</code> directory and copy the example environment variables file:</li>
</ol>
<pre><code>cd PostgreSQL &amp;&amp; cp .env.example .env
</code></pre>
<ol start="2">
    <li>Set the environment variables in the <code>.env</code> file for your PostgreSQL database.</li>
    <li>Start the PostgreSQL server using Docker Compose:</li>
</ol>
<pre><code>cd PostgreSQL &amp;&amp; docker compose up -d
</code></pre>
<ol start="4">
    <li>In the root directory of the project, copy the example environment variables file:</li>
</ol>
<pre><code>cp .env.example .env
</code></pre>
<ol start="5">
    <li>Set the environment variables in the <code>.env</code> file according to your requirements.</li>
    <li>Run <code>nvm use</code> to use the Node version specified in the <code>.nvmrc</code> file.</li>
    <li>Run the following command to run the Prisma migrations:</li>
</ol>
<pre><code>npm run prisma:migrate:dev
</code></pre>
<ol start="8">
    <li>Finally, start the development server using the following command:</li>
</ol>
<pre><code>npm run dev
</code></pre>
<p>You should now be able to access the project by navigating to <code>http://localhost:3000</code> in your web browser.</p>
<h2>Contributing</h2>
<p>Contributions are welcome! To contribute to the project, please follow the standard Git flow:</p>
<ol>
    <li>Fork the project and create a new branch</li>
    <li>Make your changes and commit them</li>
    <li>Push your changes to your forked repository</li>
    <li>Create a pull request with a detailed description of the changes</li>
</ol>
