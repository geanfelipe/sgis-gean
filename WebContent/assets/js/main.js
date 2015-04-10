$(function(){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
		
	});
	$('.ui.dropdown').dropdown();
	
	$('#areaDoFormPessoaFisica').hide();
	$('#areaDoFormPessoaJuridica').hide();

	$('#irParaCadastroPessoal').click(function () {
			$('#areaDoFormPessoaFisica').show();		
			$('#areaDoFormPessoaJuridica').hide();		
	});
	$('#irParaCadastroPessoaJuridica').click(function () {
			$('#areaDoFormPessoaFisica').hide();		
			$('#areaDoFormPessoaJuridica').show();		
	});
	$('#portalAdministrativo').click(function () {
			$('#areaDoFormPessoaFisica').hide();		
			$('#areaDoFormPessoaJuridica').hide();		
	});

	$('.ui.form').form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu nome'
        },
        {
          type   : 'length[4]',
          prompt : 'Seu nome deve conter no mínimo 4 caracteres'
        }
      ]
    },
    gender: {
      identifier  : 'gender',
      rules: [
        {
          type   : 'empty',
          prompt : 'Informe seu sexo'
        }
      ]
    },
    username: {
      identifier : 'username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    },
    data: {
      identifier : 'dataNascimentoPessoaFisica',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite sua data de nascimento'
        }
      ]
    },
    cor: {
      identifier : 'Cidadao-cor',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite sua cor'
        }
      ]
    },
    estadoCivil: {
      identifier : 'Cidadao-estadoCivil',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu estado civil'
        }
      ]
    },
    nacionalidade: {
      identifier : 'Cidadao-nacionalidade',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite sua nacionalidade'
        }
      ]
    },
    endereco: {
      identifier : 'endereco',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu endereço'
        }
      ]
    },
    razaoSocial: {
      identifier : 'razao-social',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite sua Razão Social'
        }
      ]
    },
    ncpj: {
      identifier : 'ncpj',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu CNPJ'
        }
      ]
    },
    telefone: {
      identifier : 'telefone',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu Telefone'
        }
      ]
    },
    email: {
      identifier : 'email',
      rules: [
        {
          type   : 'empty',
          prompt : 'Digite seu email'
        }
      ]
    }
   

  });

jQuery.validator.addMethod("dataNascimentoPessoaFisica", function (value, element) {
    //contando chars    
    if (value.length != 10) return (this.optional(element) || false);
    // verificando data
    var data = value;
    var dia = data.substr(0, 2);
    var barra1 = data.substr(2, 1);
    var mes = data.substr(3, 2);
    var barra2 = data.substr(5, 1);
    var ano = data.substr(6, 4);
    if (data.length != 10 || barra1 != "/" || barra2 != "/" || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12) return (this.optional(element) || false);
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) return (this.optional(element) || false);
    if (mes == 2 && (dia > 29 || (dia == 29 && ano % 4 != 0))) return (this.optional(element) || false);
    if (ano < 1900) return (this.optional(element) || false);
    return (this.optional(element) || true);
}, "Informe uma data válida (dia/mes/ano)");  // Mensagem padrão 

    $("#formPessoaFisica").validate()

    $("#cnpj").keydown(function (e) { 
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $("#telefone").keydown(function (e) { 
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
