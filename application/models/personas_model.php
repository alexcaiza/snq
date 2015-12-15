<?php

class personas_model extends CI_Model {

    // table name
    private $tbl_person = 'personas';

    function __construct() {
        parent::__construct();
    }

    public function getPersonas() {
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("personas")
                ->order_by("id", "asc")
                ->get();
        $personas = $query->result();
        return $personas;
    }

    public function getPersonasConDireccion() {
        $query = $this->db
                ->select("p.id, p.nombre, p.correo, p.telefono, p.fecha, d.calle, d.direccion, d.ciudad")
                ->from("personas as p")
                ->join("personas_direccion as d", "p.id = d.id_persona", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $personas = $query->result();
        return $personas;
    }

    public function getPersonas2() {
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("personas")
                ->order_by("id", "asc")
                ->get();
        $personas = $query->result_array();
        return $personas;
    }

    public function getPersonasPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("personas")
                ->where($filtros)
                ->get();
        $personas = $query->row();
        return $personas;
    }

    // get person by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_person);
    }

    // add new person
    function save_persona($person = array()) {
        $this->db->insert($this->tbl_person, $person);
        return $this->db->insert_id();
    }

    // update new person
    function update_persona($id, $person) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_person, $person);
        return true;
    }
    
    // update new person
    function delete_persona($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_person);
        return true;
    }

    // add new person
    function save($person) {
        $this->db->insert($this->tbl_person, $person);
        return $this->db->insert_id();
    }

    // update person by id
    function update($id, $person) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_person, $person);
    }

    // delete person by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_person);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_person);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_person, $limit, $offset);
    }

}
