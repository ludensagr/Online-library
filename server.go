package main

import (
	// "io"
  "log"
	"html/template"
	"net/http"
)


type Page struct {
	Title string
	Message string
}

var templates = template.Must(template.ParseFiles("dist/index.html"))

func renderTemplate(w http.ResponseWriter, tmpl string, p Page) {
	err := templates.ExecuteTemplate(w, tmpl + ".html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// hp := `<html>
  //   <head>
  //   <title>Go React PWA</title>
  //   <link rel="stylesheet" href="static/client.098c459b.bundle.css" type="text/css" />
  //   </head>
  //   <body>
  //     <h1>Go React PWA</h1>
  //   </body>
  //   </html>`
  // io.WriteString(w, hp)
  p := Page{ Title: "Index", Message: "Hello Go" }
	renderTemplate(w, "index", p)
}

func StaticServer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "text/html")
	staticHandler := http.FileServer(http.Dir("./dist/static/"))
	staticHandler.ServeHTTP(w, r)
	return
}

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./dist/static"))))
  http.HandleFunc("/", indexHandler)
  port := "3000"
  err := http.ListenAndServe(":" + port, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err.Error())
	}
}
