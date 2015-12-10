<?php

class horarios_model extends CI_Model {

    // table name
    private $tbl_horarios = 'horarios';

    function __construct() {
        parent::__construct();
    }

    public function getHorarios() {
        $query = $this->db
                ->select("*")
                ->from("horarios")
                ->order_by("id", "asc")
                ->get();
        $horarios = $query->result();
        return $horarios;
    }

    public function getHorarios2() {
        $query = $this->db
                ->select("id, dia, fecha, estado")
                ->from("horarios")
                ->order_by("id", "asc")
                ->get();
        $horarios = $query->result_array();
        return $horarios;
    }

    public function getHorariosPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("horarios")
                ->where($filtros)
                ->get();
        $horarios = $query->row();
        return $horarios;
    }

    // get horario by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_horarios);
    }

    // add new horario
    function save_horarios($horario = array()) {
        $this->db->insert($this->tbl_horarios, $horario);
        return $this->db->insert_id();
    }

    // update new horario
    function update_horarios($id, $horario) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_horarios, $horario);
        return true;
    }
    
    // update new horario
    function delete_horarios($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_horarios);
        return true;
    }

    // add new horario
    function save($horario) {
        $this->db->insert($this->tbl_horarios, $horario);
        return $this->db->insert_id();
    }

    // update horario by id
    function update($id, $horario) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_horarios, $horario);
    }

    // delete horario by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_horarios);
    }

    // get number of horarios in database
    function count_all() {
        return $this->db->count_all($this->tbl_horarios);
    }

    // get horarios with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_horarios, $limit, $offset);
    }

}
