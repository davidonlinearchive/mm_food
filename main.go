package main

import (
	"github.com/gorilla/mux"
)

type Menu struct {
	ID string `json:"id"`
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/Menu")
}
