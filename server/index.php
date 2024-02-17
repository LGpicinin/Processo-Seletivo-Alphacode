
    
    
    
    <?php
        class Pessoa{
            private $cpf;
            public $name;

            function __construct($cpf, $name)
            {
                $this->cpf = $cpf;
                $this->name = $name;
            }

            function getCpf(){
                return $this->cpf;
            }

        }

        $luiz = new Pessoa('07487841103', 'Luiz Gulherme Picinin');

        echo $luiz->name;


        echo $luiz->getCpf();
    ?>
