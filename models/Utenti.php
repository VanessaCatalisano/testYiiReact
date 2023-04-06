<?php

namespace app\models;
use yii\db\mssql\PDO;
use Yii;

/**
 * This is the model class for table "utenti".
 *
 * @property int $utente_id
 * @property string|null $nome
 * @property string|null $cognome
 * @property string|null $email
 * @property string $cartellino
 * @property string $psw
 * @property string $created
 * @property string $last_modified
 */
class Utenti extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'utenti';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['cartellino', 'psw'], 'required'],
            [['created', 'last_modified'], 'safe'],
            [['nome', 'cognome'], 'string', 'max' => 20],
            [['email'], 'string', 'max' => 90],
            [['cartellino', 'psw'], 'string', 'max' => 45],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'utente_id' => 'Utente ID',
            'nome' => 'Nome',
            'cognome' => 'Cognome',
            'email' => 'Email',
            'cartellino' => 'Cartellino',
            'psw' => 'Psw',
            'created' => 'Created',
            'last_modified' => 'Last Modified',
        ];
    }

    public function selectUserByCartellino ($cartellino, $psw){
        $query = 'SELECT * FROM utenti WHERE utenti.cartellino = :cartellino AND utenti.psw = :psw';
        $cmd = Yii::$app->db->createCommand( $query )
            ->bindValue( ':cartellino', $cartellino, PDO::PARAM_STR )
            ->bindValue( ':psw', $psw, PDO::PARAM_STR );

        $pass = $cmd->queryOne();

        return $pass;
    }
}
