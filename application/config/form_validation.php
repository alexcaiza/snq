<?php

$config = array(
    /**
     * Formulario
     */
    'formulario/add'
    => array(
        array('field' => 'nombre', 'label' => 'Nombre', 'rules' => 'required|is_string|xss_clean|max_length[255]'),
        array('field' => 'telefono', 'label' => 'Telefono', 'rules' => 'numeric|min_length[7]'),
        array('field' => 'email', 'label' => 'Email', 'rules' => 'required|valid_email'),
        array('field' => 'comentario', 'label' => 'Comentario', 'rules' => 'required|max_length[10]'),
        array('field' => 'pais', 'label' => 'Pais', 'rules' => 'required|validaSelect'),
    ),
    'formulario/edit'
    => array(
        array('field' => 'nombre', 'label' => 'Nombre', 'rules' => 'required|is_string|xss_clean|max_length[255]'),
        array('field' => 'telefono', 'label' => 'Telefono', 'rules' => 'numeric|min_length[7]'),
        array('field' => 'email', 'label' => 'Email', 'rules' => 'required|valid_email'),
        array('field' => 'comentario', 'label' => 'Comentario', 'rules' => 'required|max_length[10]'),
    ),
);
