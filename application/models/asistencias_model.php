<?php

class asistencias_model extends CI_Model {

    // table name
    private $tbl_asistencia = 'asistencias';

    function __construct() {
        parent::__construct();
    }

    public function getAsistencias() {
        $query = $this->db
                ->select("*")
                ->from("asistencias")
                ->order_by("id", "asc")
                ->get();
        $asistencias = $query->result();
        return $asistencias;
    }

    public function getAsistenciasConDireccion() {
        $query = $this->db
                ->select("*")
                ->from("asistencias as p")
                ->join("asistencias_direccion as d", "p.id = d.id_asistencia", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $asistencias = $query->result();
        return $asistencias;
    }

    public function getAsistencias2() {
        $query = $this->db
                ->select("*")
                ->from("asistencias")
                ->order_by("id", "asc")
                ->get();
        $asistencias = $query->result_array();
        return $asistencias;
    }

    public function getAsistenciasPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("asistencias")
                ->where($filtros)
                ->get();
        $asistencias = $query->row();
        return $asistencias;
    }

    // get asistencia by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_asistencia);
    }

    // add new asistencia
    function save_asistencia($asistencia = array()) {
        $this->db->insert($this->tbl_asistencia, $asistencia);
        return $this->db->insert_id();
    }

    // update new asistencia
    function update_asistencia($id, $asistencia) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_asistencia, $asistencia);
        return true;
    }
    
    // update new asistencia
    function delete_asistencia($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_asistencia);
        return true;
    }

    // add new asistencia
    function save($asistencia) {
        $this->db->insert($this->tbl_asistencia, $asistencia);
        return $this->db->insert_id();
    }

    // update asistencia by id
    function update($id, $asistencia) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_asistencia, $asistencia);
    }

    // delete asistencia by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_asistencia);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_asistencia);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_asistencia, $limit, $offset);
    }

}
