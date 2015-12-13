<?php
class permisos_model extends CI_Model {

    // table name
    private $tbl_permiso = 'permisos';

    function __construct() {
        parent::__construct();
    }

    public function getPermisos() {
        $query = $this->db
                ->select("*")
                ->from("permisos")
                ->order_by("id", "asc")
                ->get();
        $permisos = $query->result();
        return $permisos;
    }

    public function getPermisosConDireccion() {
        $query = $this->db
                ->select("*")
                ->from("permisos as p")
                ->join("permisos_direccion as d", "p.id = d.id_permiso", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $permisos = $query->result();
        return $permisos;
    }

    public function getPermisos2() {
        $query = $this->db
                ->select("*")
                ->from("permisos")
                ->order_by("id", "asc")
                ->get();
        $permisos = $query->result_array();
        return $permisos;
    }

    public function getPermisosPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("permisos")
                ->where($filtros)
                ->get();
        $permisos = $query->row();
        return $permisos;
    }

    // get permiso by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_permiso);
    }

    // add new permiso
    function save_permiso($permiso = array()) {
        $this->db->insert($this->tbl_permiso, $permiso);
        return $this->db->insert_id();
    }

    // update new permiso
    function update_permiso($id, $permiso) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_permiso, $permiso);
        return true;
    }
    
    // update new permiso
    function delete_permiso($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_permiso);
        return true;
    }

    // add new permiso
    function save($permiso) {
        $this->db->insert($this->tbl_permiso, $permiso);
        return $this->db->insert_id();
    }

    // update permiso by id
    function update($id, $permiso) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_permiso, $permiso);
    }

    // delete permiso by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_permiso);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_permiso);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_permiso, $limit, $offset);
    }

}
