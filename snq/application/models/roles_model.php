<?php
class roles_model extends CI_Model {

    // table name
    private $tbl_roles = 'roles';

    function __construct() {
        parent::__construct();
    }

    public function getRoles() {
        $query = $this->db
                ->select("*")
                ->from("roles")
                ->order_by("id", "asc")
                ->get();
        $roles = $query->result();
        return $roles;
    }

    public function getRolesConDireccion() {
        $query = $this->db
                ->select("*")
                ->from("roles as p")
                ->join("roles_direccion as d", "p.id = d.id_rol", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $roles = $query->result();
        return $roles;
    }

    public function getRoles2() {
        $query = $this->db
                ->select("*")
                ->from("roles")
                ->order_by("id", "asc")
                ->get();
        $roles = $query->result_array();
        return $roles;
    }

    public function getRolesPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("roles")
                ->where($filtros)
                ->get();
        $roles = $query->row();
        return $roles;
    }

    // get rol by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_roles);
    }

    // add new rol
    function save_rol($rol = array()) {
        $this->db->insert($this->tbl_roles, $rol);
        return $this->db->insert_id();
    }

    // update new rol
    function update_rol($id, $rol) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_roles, $rol);
        return true;
    }
    
    // update new rol
    function delete_rol($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_roles);
        return true;
    }

    // add new rol
    function save($rol) {
        $this->db->insert($this->tbl_roles, $rol);
        return $this->db->insert_id();
    }

    // update rol by id
    function update($id, $rol) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_roles, $rol);
    }

    // delete rol by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_roles);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_roles);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_roles, $limit, $offset);
    }

}
