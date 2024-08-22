% Class Identifier and Version
% \ProvidesClass{main}[2023/06/06 Kyvernitis class]
\NeedsTeXFormat{LaTeX2e}

% Set font size and paper type
\LoadClass[11pt,letterpaper]{letter}

% Enable custom and named colors
\RequirePackage[usenames,dvipsnames]{color}

% Remove paragraph indentation
\RequirePackage[parfill]{parskip}

% Set margin width
\RequirePackage[hmargin=1.0cm,vmargin=0.5cm]{geometry}

% Use cool fonts
\RequirePackage{fontspec}

% Using IBM Plex Sans
\RequirePackage[sfdefault,light]{plex-sans}

% Use hyperref
\RequirePackage[xetex]{hyperref}

% Use extended columns definitions
\RequirePackage{array}

% Make custom tables
\RequirePackage{tabularx}

% Use FontAwesome icons
\RequirePackage{fontawesome5}

% Adjust page width in the middle of the page
\RequirePackage{changepage}

% Adjust bullet size
\RequirePackage{scalerel}

% Multiple columns
\RequirePackage{multicol}

% Page headers
\RequirePackage{fancyhdr}

% Remove page numbers
\pagestyle{empty}

% Define navy-blue color for later use. Color code is taken from Canva
\definecolor{navyblue}{RGB}{0, 83, 137}
\definecolor{links}{RGB}{3, 43, 198}

% Setup Hyperlink style
\hypersetup{
    colorlinks=true,
    urlcolor=links
}

% Define variables
\def\name#1{\renewcommand\name{#1}}
\def\role#1{\renewcommand\role{#1}}

\def\phone#1{
    \renewcommand\phone{
        \href{tel:#1}{\textcolor{black}{\faPhone*}\hspace{0.5em}#1}
    }
}
\def\location#1{
    \renewcommand\location{
        \textcolor{black}{\faFlagUsa}\hspace{0.5em}#1
    }
}
\def\email#1{
    \renewcommand\email{
        \href{mailto:#1}{\textcolor{black}{\faEnvelope[regular]}\hspace{0.5em}#1}
    }
}
\def\website#1{
    \renewcommand\website{
        \href{https://#1}{\textcolor{black}{\faGlobeAmericas}\hspace{0.5em}#1}
    }
}
\def\linkedin#1{
    \renewcommand\linkedin{
        \href{https://linkedin.com/in/#1}{\textcolor{black}{\faLinkedinIn}\hspace{0.5em}#1}
    }
}
\def\github#1{
    \renewcommand\github{
        \href{https://github.com/#1}{\textcolor{black}{\faGithub}\hspace{0.5em}#1}
    }
}
\def\twitter#1{
    \renewcommand\twitter{
        \href{https://twitter.com/#1}{\textcolor{black}{\faTwitter}\hspace{0.5em}#1}
    }
}


% Define header
\fancypagestyle{plain}{
    \lhead{
        \begin{tabular}[c]{l}
            \fontsize{25}{45}\selectfont{\color{navyblue}{\textbf\name}}
            \ifx\empty\role\empty\else
            \\ \textit{\small\role}
            \fi
        \end{tabular}
        \vspace{0.8em}
        \newline
        \begin{tabular}[c]{l@{\hspace{1em}}l}
            \small\email    & \small\website
            \tabularnewline
            \small\linkedin & \small\github
        \end{tabular}
        \vspace{1pt}
    }
    \renewcommand{\headrulewidth}{2pt}
    \renewcommand{\headrule}{\hbox to\headwidth{
            \color{navyblue}\leaders\hrule height \headrulewidth\hfill}
    }
}
\setlength{\headheight}{160pt}
\setlength{\headsep}{0pt}

\makeatletter
\let\ps@empty\ps@plain
\let\ps@firstpage\ps@plain
\makeatother

\date{}
\address{}
