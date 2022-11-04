<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/custom/register/templates/trainerprofilepage.html.twig */
class __TwigTemplate_7bacaa537df4242569f1c5ec48e066c08d46638853cc8690957b03f70c19b7d3 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\" col-3\"></div>

<div class=\"views-col col-4\" style=\"margin-left: 15%; width: 65% !important;\">
    <h3 class=\"mb-0\" style = \"text-align: center;
    font-weight: 700;
    font-size: 34px;
    margin-top: 35px;\"><i></i>Assigned Courses</h3>

    
   <div class=\"views-field views-field-name\">
    <table class=\"table\">
        <thead>
            <tr>
            <th scope=\"col\" style=\"text-align: center;\">Coure Name</th>
            <th scope=\"col\" style=\"text-align: center;\">Applied Course</th>
            </tr>
        </thead>
        <tbody>
           ";
        // line 19
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["rec"]) {
            // line 20
            echo "         <tr>
            <td><h3 class=\"mb-0\"><i></i>";
            // line 21
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["rec"], 21, $this->source), "html", null, true);
            echo "</h3></td>
            <td><a href=\"/drupal-elearning/studentlist/";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["rec"], 22, $this->source), "html", null, true);
            echo "\">Applied Students</a></td>
          </tr>
            
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['rec'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "        </span>

        
            
            
        </tbody>
      
        </table>
    
    </div>
</div>

<div class=\"col-3\"></div>


<script>
\$(\"#block-login-link a\").text(\"Logout\");
</script>";
    }

    public function getTemplateName()
    {
        return "modules/custom/register/templates/trainerprofilepage.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  80 => 26,  70 => 22,  66 => 21,  63 => 20,  59 => 19,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/custom/register/templates/trainerprofilepage.html.twig", "C:\\xampp\\htdocs\\drupal-elearning\\modules\\custom\\register\\templates\\trainerprofilepage.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 19);
        static $filters = array("escape" => 21);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
