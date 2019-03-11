import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/client/index.html", "dist/client" );
shell.cp( "-R", "src/server", "dist/" );