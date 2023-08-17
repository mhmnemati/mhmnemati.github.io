\documentclass[]{main}
\fullname{Mohammad Hosein Nemati}
\jobtitle{DevOps Engineer}

\begin{document}
\resumeheader
{\email{ckoliber@gmail.com}}
{\linkedin{ckoliber}}
{\github{ckoliber}}
{\phone{+98 937-758-8105}}
{\website{koliber.ir}}
{\nationality{Iran}}

\begin{section}{Education}
    {{ range $i, $item := (ds "educations") -}}
    \begin{subsectionnobullet}{ {{ $item.title }} }{ {{ $item.subtitle }} }{ {{ $item.date }} }{ {{ $item.date }} }
        {{ range $j, $_item := $item.items -}}
        \italicitem{ {{ $_item.text }} }
        {{ end -}}
    \end{subsectionnobullet}
    {{ end -}}
\end{section}

\begin{section}{Areas of Interest}
    \begin{subsectionbullet}
        {{ range $i, $item := (ds "interests") -}}
        \item {{ $item }}
        {{ end -}}
    \end{subsectionbullet}
\end{section}

\begin{section}{Relevant Courses \small{(Graduate courses are indicated by *)}}
    \begin{multicols}{2}
        \begin{subsectionbullet}
            {{ range $i, $item := (ds "courses") -}}
            \item {{ $item.title }} \hfill \textit{ {{ $item.grade }} }
            {{ end -}}
        \end{subsectionbullet}
    \end{multicols}
\end{section}

\sectiontable{Licenses \& Certifications}{
    {{ range $i, $item := (ds "licenses") -}}
    \entry{ {{ $item.title }} }{ {{ $item.subtitle }} \hfill \textit{ {{ $item.date }} }}
    {{ end -}}
}

\begin{section}{Honors and Awards}
    \begin{subsectionbullet}
        {{ range $i, $item := (ds "honors") -}}
        \item {{ $item.title | strings.ReplaceAll "%" "\\%" }} \hfill \textit{ {{ $item.date }} }
        {{ end -}}
    \end{subsectionbullet}
\end{section}

\sectiontable{Technical Skills}{
    {{ range $i, $item := (ds "skills") -}}
    \entry{ {{ $item.title }} }{ {{ conv.Join $item.skills ", " | strings.ReplaceAll "#" "\\#" }} }
    {{ end -}}
}

\begin{section}{Research Experience}
    {{ range $i, $item := (ds "experiences_research") -}}
        \begin{subsection}{ {{ $item.title }} }{ {{ $item.subtitle | strings.ReplaceAll "&" "\\&" }} }{ {{ $item.date }} }{ {{ $item.location }} }
            {{ range $j, $_item := $item.items -}}
            \item {{ $_item.text | strings.ReplaceAll "&" "\\&" }} {{ if coll.Has $_item "link" }}\;\href{ {{ $_item.link }} }{\faExternalLink*}{{ end }}
            {{ end -}}
        \end{subsection}
    {{ end -}}
\end{section}

\begin{section}{Teaching Experience}
    {{ range $i, $item := (ds "experiences_teaching") -}}
        \begin{subsection}{ {{ $item.title }} }{ {{ $item.subtitle | strings.ReplaceAll "&" "\\&" }} }{ {{ $item.date }} }{ {{ $item.location }} }
            {{ range $j, $_item := $item.items -}}
            \item {{ $_item.text | strings.ReplaceAll "&" "\\&" }} {{ if coll.Has $_item "link" }}\;\href{ {{ $_item.link }} }{\faExternalLink*}{{ end }}
            {{ end -}}
        \end{subsection}
    {{ end -}}
\end{section}

\begin{section}{Work Experience}
    {{ range $i, $item := (ds "experiences_work") -}}
        \begin{subsection}{ {{ $item.title }} }{ {{ $item.subtitle | strings.ReplaceAll "&" "\\&" }} }{ {{ $item.date }} }{ {{ $item.location }} }
            {{ range $j, $_item := $item.items -}}
            \item {{ $_item.text | strings.ReplaceAll "&" "\\&" }} {{ if coll.Has $_item "link" }}\;\href{ {{ $_item.link }} }{\faExternalLink*}{{ end }}
            {{ end -}}
        \end{subsection}
    {{ end -}}
\end{section}

\begin{section}{Notable Projects}
    {{ range $i, $item := (ds "projects_notable") -}}
        \begin{subsection}{ {{ $item.title }} }{ {{ $item.subtitle | strings.ReplaceAll "&" "\\&" }} }{ {{ $item.date }} }{ {{ $item.location }} }
            {{ range $j, $_item := $item.items -}}
            \item {{ $_item.text | strings.ReplaceAll "&" "\\&" }} {{ if coll.Has $_item "link" }}\;\href{ {{ $_item.link }} }{\faExternalLink*}{{ end }}
            {{ end -}}
        \end{subsection}
    {{ end -}}
\end{section}

\begin{section}{Published Projects}
    {{ range $i, $item := (ds "projects_published") -}}
        \begin{subsection}{ {{ $item.title }} }{ {{ $item.subtitle | strings.ReplaceAll "&" "\\&" }} }{ {{ $item.date }} }{ {{ $item.location }} }
            {{ range $j, $_item := $item.items -}}
            \item {{ $_item.text | strings.ReplaceAll "&" "\\&" }} {{ if coll.Has $_item "link" }}\;\href{ {{ $_item.link }} }{\faExternalLink*}{{ end }}
            {{ end -}}
        \end{subsection}
    {{ end -}}
\end{section}

\sectiontable{Languages}{
    {{ range $i, $item := (ds "languages") -}}
    \entry{ {{ $item.title }} }{ {{ $item.description }} }
    {{ end -}}
}

\end{document}
