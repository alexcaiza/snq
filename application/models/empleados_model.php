<?php

class empleados_model extends CI_Model {

    // table name
    private $tbl_empleados = 'empleados';

    function __construct() {
        parent::__construct();
    }

    public function getPersonas() {
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("empleados")
                ->order_by("id", "asc")
                ->get();
        $empleados = $query->result();
        return $empleados;
    }

    public function getPersonasConDireccion() {
        $query = $this->db
                ->select("p.id, p.nombre, p.correo, p.telefono, p.fecha, d.calle, d.direccion, d.ciudad")
                ->from("empleados as p")
                ->join("empleados_direccion as d", "p.id = d.id_empleadoa", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $empleados = $query->result();
        return $empleados;
    }

    public function getPersonas2() {
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("empleados")
                ->order_by("id", "asc")
                ->get();
        $empleados = $query->result_array();
        return $empleados;
    }

    public function getPersonasPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("id, nombre, correo, telefono, fecha")
                ->from("empleados")
                ->where($filtros)
                ->get();
        $empleados = $query->row();
        return $empleados;
    }

    // get empleado by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_empleados);
    }

    // add new empleado
    function save_empleadoa($empleado = array()) {
        $this->db->insert($this->tbl_empleados, $empleado);
        return $this->db->insert_id();
    }

    // update new empleado
    function update_empleadoa($id, $empleado) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_empleados, $empleado);
        return true;
    }
    
    // update new empleado
    function delete_empleadoa($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_empleados);
        return true;
    }

    // add new empleado
    function save($empleado) {
        $this->db->insert($this->tbl_empleados, $empleado);
        return $this->db->insert_id();
    }

    // update empleado by id
    function update($id, $empleado) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_empleados, $empleado);
    }

    // delete empleado by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_empleados);
    }

    // get number of empleados in database
    function count_all() {
        return $this->db->count_all($this->tbl_empleados);
    }

    // get empleados with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_empleados, $limit, $offset);
    }

}
