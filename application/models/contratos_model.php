<?php

class contratos_model extends CI_Model {

    // table name
    private $tbl_contratos = 'contratos';

    function __construct() {
        parent::__construct();
    }

    public function getContratos() {
        $query = $this->db
                ->select("*")
                ->from("contratos")
                ->order_by("id", "asc")
                ->get();
        $contratos = $query->result();
        return $contratos;
    }

    public function getContratos2() {
        $query = $this->db
                ->select("*")
                ->from("contratos")
                ->order_by("id", "asc")
                ->get();
        $contratos = $query->result_array();
        return $contratos;
    }

    public function getContratosPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("contratos")
                ->where($filtros)
                ->get();
        $contratos = $query->row();
        return $contratos;
    }

    // get contrato by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_contratos);
    }

    // add new contrato
    function save_contratos($contrato = array()) {
        $this->db->insert($this->tbl_contratos, $contrato);
        return $this->db->insert_id();
    }

    // update new contrato
    function update_contratos($id, $contrato) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_contratos, $contrato);
        return true;
    }
    
    // update new contrato
    function delete_contratos($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_contratos);
        return true;
    }

    // add new contrato
    function save($contrato) {
        $this->db->insert($this->tbl_contratos, $contrato);
        return $this->db->insert_id();
    }

    // update contrato by id
    function update($id, $contrato) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_contratos, $contrato);
    }

    // delete contrato by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_contratos);
    }

    // get number of contratos in database
    function count_all() {
        return $this->db->count_all($this->tbl_contratos);
    }

    // get contratos with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_contratos, $limit, $offset);
    }

}
