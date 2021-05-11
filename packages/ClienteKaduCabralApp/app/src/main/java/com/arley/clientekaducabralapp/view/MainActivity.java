package com.arley.clientekaducabralapp.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.arley.clientekaducabralapp.R;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    Button btShare;
    TextView tvBalance, tvCode;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tvBalance = findViewById(R.id.activity_main_tv_balance);
        tvCode = findViewById(R.id.activity_main_tv_code);

        //FORMATANDO PRO VALOR EM REAL
        /*NumberFormat format = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"));

        String balance = snapshot.getValue().toString();
        BigDecimal balanceN = new BigDecimal(balance);

        tvBalance.setText(format.format(balanceN));*/

        btShare = findViewById(R.id.activity_main_bt_share);
        btShare.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendWhatsappMessage();
            }
        });
    }

    public void sendWhatsappMessage() {
        Intent waIntent = new Intent(Intent.ACTION_SEND);
        waIntent.setType("text/plain");
        String text = "exemplo de mensagem\n" +
                "\"Olá, você ja ouviu falar no escritório Kadu Cabral Arquitetura?\"\n" +
                "\n" +
                "https://beacons.page/kaducabral\n"+
                "\n" +
                "(clique aqui para saber como ganhar dinheiro mesmo sem fechar um projeto)\n" +
                "(Link para baixar o app)\n" +
                "\n" +
                "Código: " + tvCode.getText().toString();

        waIntent.setPackage("com.whatsapp");

        waIntent.putExtra(Intent.EXTRA_TEXT, text);
        startActivity(Intent.createChooser(waIntent, "Share with"));

    }



}